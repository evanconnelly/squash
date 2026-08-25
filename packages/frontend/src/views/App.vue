<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Chip from "primevue/chip";
import InputNumber from "primevue/inputnumber";
import MenuBar from "primevue/menubar";
import { useSDK } from "@/plugins/sdk";
import { ref, onMounted, onUnmounted, computed } from "vue";
import Usage from "./Usage.vue";
import { jobs, clearFinishedJobs, markCancelRequested, runningCount, type SquashJob } from "../jobs";

// Retrieve the SDK instance to interact with the backend
const sdk = useSDK();

// Tab state
const page = ref<"Configuration" | "Jobs" | "Usage">("Configuration");

// Ticking clock so running-job durations update live.
const now = ref(Date.now());
let clock: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
  clock = setInterval(() => (now.value = Date.now()), 1000);
});
onUnmounted(() => {
  if (clock) clearInterval(clock);
});

const jobsLabel = computed(() => {
  const running = runningCount();
  return running > 0 ? `Jobs (${running})` : "Jobs";
});

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
    label: jobsLabel.value,
    command: () => {
      page.value = "Jobs";
    },
    class: page.value === "Jobs" ? "active-nav-item" : ""
  },
  {
    label: "Usage",
    command: () => {
      page.value = "Usage";
    },
    class: page.value === "Usage" ? "active-nav-item" : ""
  },
]);

// --- Jobs tab helpers ---
const hasFinishedJobs = computed(() => jobs.some((j) => j.status !== "running"));

const cancelJob = async (job: SquashJob) => {
  if (job.status !== "running" || job.cancelRequested) return;
  markCancelRequested(job.id);
  try {
    await sdk.backend.cancelMinimize(job.id);
  } catch (error) {
    console.error("Failed to request cancellation:", error);
    sdk.window.showToast("Failed to request cancellation", { variant: "error" });
  }
};

const formatDuration = (job: SquashJob): string => {
  const end = job.finishedAt ?? now.value;
  const secs = Math.max(0, Math.round((end - job.startedAt) / 1000));
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  return `${mins}m ${secs % 60}s`;
};

const statusClass = (status: SquashJob["status"]): string => {
  switch (status) {
    case "running": return "job-status-running";
    case "completed": return "job-status-completed";
    case "cancelled": return "job-status-cancelled";
    case "failed": return "job-status-failed";
    default: return "";
  }
};

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

      <!-- Jobs Tab -->
      <div v-else-if="page === 'Jobs'">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold">Minimization Jobs</h2>
          <Button
            label="Clear finished"
            severity="secondary"
            :disabled="!hasFinishedJobs"
            @click="clearFinishedJobs"
          />
        </div>

        <div v-if="jobs.length === 0" class="text-sm text-gray-600">
          No minimization jobs yet. Right-click a request and choose
          <span class="font-semibold">Squash → Minimize Request</span> to start one.
        </div>

        <div v-else class="flex flex-col gap-2">
          <div
            v-for="job in jobs"
            :key="job.id"
            class="job-row flex items-center gap-3 p-3 rounded border"
          >
            <span class="job-status" :class="statusClass(job.status)">
              {{ job.cancelRequested && job.status === 'running' ? 'cancelling' : job.status }}
            </span>
            <div class="flex-1 min-w-0">
              <div class="font-medium truncate" :title="job.label">{{ job.label }}</div>
              <div class="text-xs text-gray-600 truncate">
                {{ formatDuration(job) }}<template v-if="job.message"> · {{ job.message }}</template>
              </div>
            </div>
            <Button
              v-if="job.status === 'running'"
              label="Cancel"
              severity="danger"
              size="small"
              :disabled="job.cancelRequested"
              @click="cancelJob(job)"
            />
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

.job-row {
  border-color: var(--c-border, rgba(255, 255, 255, 0.1));
  background-color: var(--c-bg-subtle);
}

.job-status {
  flex-shrink: 0;
  min-width: 5.5rem;
  text-align: center;
  text-transform: capitalize;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
}

.job-status-running {
  color: #1d4ed8;
  background-color: rgba(59, 130, 246, 0.15);
}

.job-status-completed {
  color: #15803d;
  background-color: rgba(34, 197, 94, 0.15);
}

.job-status-cancelled {
  color: #b45309;
  background-color: rgba(245, 158, 11, 0.15);
}

.job-status-failed {
  color: #b91c1c;
  background-color: rgba(239, 68, 68, 0.15);
}
</style>
<style>
html, body, #app {
  height: 100%;
}
</style>