import { reactive } from "vue";

export type JobStatus = "running" | "completed" | "failed" | "cancelled";

export interface SquashJob {
  id: string;
  label: string;
  status: JobStatus;
  startedAt: number;
  finishedAt?: number;
  message?: string;
  cancelRequested?: boolean;
}

// Shared, reactive list of minimization jobs. Both the command handler
// (index.ts) and the Jobs tab (App.vue) import this same singleton, so updates
// from one are reflected in the other.
export const jobs = reactive<SquashJob[]>([]);

export const addJob = (id: string, label: string): void => {
  jobs.unshift({ id, label, status: "running", startedAt: Date.now() });
};

export const finishJob = (
  id: string,
  status: Exclude<JobStatus, "running">,
  message?: string,
): void => {
  const job = jobs.find((j) => j.id === id);
  if (!job) return;
  job.status = status;
  job.finishedAt = Date.now();
  if (message !== undefined) job.message = message;
};

export const markCancelRequested = (id: string): void => {
  const job = jobs.find((j) => j.id === id);
  if (job && job.status === "running") {
    job.cancelRequested = true;
    job.message = "Cancelling…";
  }
};

export const clearFinishedJobs = (): void => {
  for (let i = jobs.length - 1; i >= 0; i--) {
    if (jobs[i]!.status !== "running") jobs.splice(i, 1);
  }
};

export const runningCount = (): number =>
  jobs.filter((j) => j.status === "running").length;

export const genJobId = (): string =>
  `job_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
