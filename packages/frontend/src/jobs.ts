import { reactive } from "vue";

export interface SquashJob {
  id: string;
  label: string;
  startedAt: number;
  cancelRequested?: boolean;
}

// Shared, reactive list of currently-running minimization jobs. Both the command
// handler (index.ts) and the Jobs tab (App.vue) import this same singleton, so
// updates from one are reflected in the other. Jobs are removed as soon as they
// finish — no history is kept.
export const jobs = reactive<SquashJob[]>([]);

export const addJob = (id: string, label: string): void => {
  jobs.unshift({ id, label, startedAt: Date.now() });
};

export const removeJob = (id: string): void => {
  const i = jobs.findIndex((j) => j.id === id);
  if (i >= 0) jobs.splice(i, 1);
};

export const markCancelRequested = (id: string): void => {
  const job = jobs.find((j) => j.id === id);
  if (job) job.cancelRequested = true;
};

export const runningCount = (): number => jobs.length;

export const genJobId = (): string =>
  `job_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
