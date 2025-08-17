<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Chip from "primevue/chip";
import InputNumber from "primevue/inputnumber";
import MenuBar from "primevue/menubar";
import { useSDK } from "@/plugins/sdk";
import { ref, onMounted, computed } from "vue";
import Usage from "./Usage.vue";

// Retrieve the SDK instance to interact with the backend
const sdk = useSDK();

// Tab state
const page = ref<"Configuration" | "Usage">("Configuration");

// Create a computed property for menu items that updates when page changes
const items = computed(() => [
  {
    label: "Configuration",
    command: () => {
      page.value = "Configuration";
    },
    class: page.value === "Configuration" ? "active-nav-item" : ""
  },
  {
    label: "Usage",
    command: () => {
      page.value = "Usage";
    },
    class: page.value === "Usage" ? "active-nav-item" : ""
  },
]);

// Configuration state
const rateLimitRequestPerSecond = ref(2);
const rateLimitMinDelayMs = ref(100);
const requestConfigTimeout = ref(30000);
const requestConfigMaxRetries = ref(2);
const openTabAfterMinimize = ref(true);
const saveRequests = ref(false);

// Minimization steps state
const queryParameters = ref(true);
const formBodyParameters = ref(true);
const headers = ref(true);
const jsonBody = ref(true);

// Auto-removed headers state
const autoRemovedHeaders = ref([
  'sec-*'
]);

const newHeader = ref('');

const addHeader = () => {
  if (newHeader.value.trim() && !autoRemovedHeaders.value.includes(newHeader.value.trim())) {
    autoRemovedHeaders.value.push(newHeader.value.trim());
    newHeader.value = '';
    saveConfig();
  }
};

const removeHeader = (header: string) => {
  autoRemovedHeaders.value = autoRemovedHeaders.value.filter(h => h !== header);
  saveConfig();
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    addHeader();
  }
};

// Headers NOT to remove state
const doNotRemoveHeaders = ref<string[]>([]);
const newDoNotRemoveHeader = ref('');

const addDoNotRemoveHeader = () => {
  if (newDoNotRemoveHeader.value.trim() && !doNotRemoveHeaders.value.includes(newDoNotRemoveHeader.value.trim())) {
    doNotRemoveHeaders.value.push(newDoNotRemoveHeader.value.trim());
    newDoNotRemoveHeader.value = '';
    saveConfig();
  }
};

const removeDoNotRemoveHeader = (header: string) => {
  doNotRemoveHeaders.value = doNotRemoveHeaders.value.filter(h => h !== header);
  saveConfig();
};

const handleDoNotRemoveHeaderKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    addDoNotRemoveHeader();
  }
};

// Load configuration from storage
onMounted(async () => {
  const storage = await sdk.storage.get();
  if (storage && typeof storage === 'object') {
    const config = storage as any;
    rateLimitRequestPerSecond.value = config.rateLimit?.requestsPerSecond ?? 2;
    rateLimitMinDelayMs.value = config.rateLimit?.minDelayMs ?? 100;
    requestConfigTimeout.value = config.requestConfig?.timeoutMs ?? 30000;
    requestConfigMaxRetries.value = config.requestConfig?.maxRetries ?? 2;
    autoRemovedHeaders.value = config.autoRemovedHeaders ?? ['sec-*'];
    doNotRemoveHeaders.value = config.doNotRemoveHeaders ?? [];
    openTabAfterMinimize.value = config.openTabAfterMinimize ?? true;
    saveRequests.value = config.saveRequests ?? false;
    
    // Load minimization steps configuration
    queryParameters.value = config.minimizationSteps?.queryParameters ?? true;
    formBodyParameters.value = config.minimizationSteps?.formBodyParameters ?? true;
    headers.value = config.minimizationSteps?.headers ?? true;
    jsonBody.value = config.minimizationSteps?.jsonBody ?? true;
  }
});

// Save configuration to storage
const saveConfig = async () => {
  await sdk.storage.set({
    rateLimit: {
      requestsPerSecond: rateLimitRequestPerSecond.value,
      minDelayMs: rateLimitMinDelayMs.value,
    },
    requestConfig: {
      timeoutMs: requestConfigTimeout.value,
      maxRetries: requestConfigMaxRetries.value,
    },
    autoRemovedHeaders: autoRemovedHeaders.value,
    doNotRemoveHeaders: doNotRemoveHeaders.value,
    openTabAfterMinimize: openTabAfterMinimize.value,
    saveRequests: saveRequests.value,
    minimizationSteps: {
      queryParameters: queryParameters.value,
      formBodyParameters: formBodyParameters.value,
      headers: headers.value,
      jsonBody: jsonBody.value,
    }
  });
  sdk.window.showToast("Configuration saved successfully", { variant: "success" });
};
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- Navigation Bar -->
    <div class="navbar flex items-center w-full bg-gray-50 border-b">
      <div class="logo flex items-center gap-2 px-4 py-2">
        <i class="fas fa-compress"></i>
        <span class="font-bold">Squash</span>
      </div>
      <MenuBar :model="items" breakpoint="320px" class="flex-1" />
    </div>

    <!-- Content Area -->
    <div class="flex-1 min-h-0 overflow-auto p-4">
      <!-- Configuration Tab -->
      <div v-if="page === 'Configuration'">
        <!-- Configuration Section -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Configuration</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label>Minimum delay (ms)</label>
              <p class="text-sm text-gray-600">The amount of milliseconds to wait between issuing requests</p>
              <InputNumber v-model="rateLimitMinDelayMs" :min="100" :max="5000" />
            </div>
            <div class="flex flex-col gap-2">
              <label>Request timeout (ms)</label>
              <p class="text-sm text-gray-600">How long to wait before timing out a response</p>
              <InputNumber v-model="requestConfigTimeout" :min="1000" :max="60000" />
            </div>
            <div class="flex flex-col gap-2">
              <label>Max retries</label>
              <p class="text-sm text-gray-600">How many times to retry a request if it fails</p>
              <InputNumber v-model="requestConfigMaxRetries" :min="0" :max="5" />
            </div>
            <div class="flex flex-col gap-2">
              <label>Open tab after minimize</label>
              <p class="text-sm text-gray-600">Automatically open the minimized request in a new tab</p>
              <div class="flex items-center">
                <input type="checkbox" v-model="openTabAfterMinimize" class="mr-2" />
                <span>Enabled</span>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label>Save requests to history</label>
              <p class="text-sm text-gray-600">Save test requests to HTTP history (may pollute search)</p>
              <div class="flex items-center">
                <input type="checkbox" v-model="saveRequests" class="mr-2" />
                <span>Enabled</span>
              </div>
            </div>
          </div>
          <Button label="Save Configuration" @click="saveConfig" class="mt-4" />
        </div>

        <!-- Minimization Steps Section -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Minimization Steps</h2>
          <p class="text-sm text-gray-600 mb-4">Select which parts of the request to minimize</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="queryParameters" @change="saveConfig" />
              <label>Query Parameters</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="formBodyParameters" @change="saveConfig" />
              <label>Form Body Parameters</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="headers" @change="saveConfig" />
              <label>Headers</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="jsonBody" @change="saveConfig" />
              <label>JSON Body</label>
            </div>
          </div>
        </div>

        <!-- Auto-removed Headers Section -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Auto-removed Headers</h2>
          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap gap-2">
              <Chip 
                v-for="header in autoRemovedHeaders" 
                :key="header" 
                :label="header" 
                removable 
                @remove="removeHeader(header)"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Add header pattern (supports regex)</label>
              <div class="flex gap-2">
                <InputText 
                  v-model="newHeader" 
                  placeholder="Enter header name or pattern" 
                  @keypress="handleKeyPress"
                  class="flex-1"
                />
                <Button label="Add" @click="addHeader" />
              </div>
            </div>
          </div>
        </div>
        <!-- Headers NOT to Remove Section -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Headers NOT to Remove</h2>
          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap gap-2">
              <Chip 
                v-for="header in doNotRemoveHeaders" 
                :key="header" 
                :label="header" 
                removable 
                @remove="removeDoNotRemoveHeader(header)"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Add header pattern (supports regex)</label>
              <div class="flex gap-2">
                <InputText 
                  v-model="newDoNotRemoveHeader" 
                  placeholder="Enter header name or pattern" 
                  @keypress="handleDoNotRemoveHeaderKeyPress"
                  class="flex-1"
                />
                <Button label="Add" @click="addDoNotRemoveHeader" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Usage Tab -->
      <div v-else-if="page === 'Usage'">
        <Usage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-inputnumber {
  width: 100%;
}

/* Styling for active navigation item */
.active-nav-item {
  background-color: rgba(255, 255, 255, 0.3) !important;
  border-radius: 4px !important;
}

.navbar {
  background-color: var(--c-bg-subtle);
}

.logo {
  font-size: 1.5em;
  color: var(--c-text-primary);
}
</style>
<style>
html, body, #app {
  height: 100%;
}
</style>