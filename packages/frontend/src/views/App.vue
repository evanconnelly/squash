<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Chip from "primevue/chip";
import InputNumber from "primevue/inputnumber";
import { useSDK } from "@/plugins/sdk";
import { ref, onMounted } from "vue";

// Retrieve the SDK instance to interact with the backend
const sdk = useSDK();

// Configuration state
const rateLimitRequestPerSecond = ref(2);
const rateLimitMinDelayMs = ref(500);
const requestConfigTimeout = ref(30000);
const requestConfigMaxRetries = ref(2);
const openTabAfterMinimize = ref(true);

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

// Load configuration from storage
onMounted(async () => {
  const storage = await sdk.storage.get();
  if (storage) {
    rateLimitRequestPerSecond.value = storage.rateLimit?.requestsPerSecond ?? 2;
    rateLimitMinDelayMs.value = storage.rateLimit?.minDelayMs ?? 500;
    requestConfigTimeout.value = storage.requestConfig?.timeoutMs ?? 30000;
    requestConfigMaxRetries.value = storage.requestConfig?.maxRetries ?? 2;
    autoRemovedHeaders.value = storage.autoRemovedHeaders ?? ['sec-*'];
    openTabAfterMinimize.value = storage.openTabAfterMinimize ?? true;
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
    openTabAfterMinimize: openTabAfterMinimize.value
  });
  sdk.window.showToast("Configuration saved successfully", { variant: "success" });
};
</script>

<template>
  <div class="h-full p-4">
    <div class="max-w-3xl mx-auto">
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
        </div>
        <Button label="Save Configuration" @click="saveConfig" class="mt-4" />
      </div>

      <!-- Auto-removed Headers Section -->
      <div>
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
    </div>
  </div>
</template>

<style scoped>
.p-inputnumber {
  width: 100%;
}
</style>