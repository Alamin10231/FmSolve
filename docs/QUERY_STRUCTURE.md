# TanStack Query: Simple, Professional Structure

This structure keeps things easy to use and easy to maintain. Copy the pattern for each domain (reports, forms, news, etc.).

## Folder Layout

```
src/
  provider/
    QueryProvider.jsx        # React Query client + provider
  services/
    api.js                   # Axios instance
    <domain>.service.js      # Network calls per domain (e.g., reports, forms, news)
  features/
    <domain>/
      query.js               # Keys + hooks for the domain (simple, minimal)
```

## 1) Provider (already in your project)
- Ensure there is a single QueryClient provider.
- Optional: add devtools for debugging.

Example: `src/provider/QueryProvider.jsx`

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

export default function QueryProvider({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
```

## 2) API Client (already in your project)
Centralized Axios instance.

`src/services/api.js`
```js
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL ?? import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const lang = localStorage.getItem("app_lang") || "EN";
  config.params = { ...(config.params || {}), lang: lang.toLowerCase() };
  return config;
});

export default api;
```

## 3) Service per domain (very small, predictable)
Example: `src/services/reports.service.js`

```js
import api from "./api";

export const getReports = (params = {}) => api.get("/reports/", { params }).then(r => r.data);
export const getReport = (id) => api.get(`/reports/${id}`).then(r => r.data);
export const createReport = (data) => api.post("/reports/", data).then(r => r.data);
export const updateReport = (id, data) => api.patch(`/reports/${id}`, data).then(r => r.data);
export const deleteReport = (id) => api.delete(`/reports/${id}`).then(() => undefined);
```

Copy this file and replace `reports` with `forms`, `news`, etc.

## 4) Keys + Hooks per domain (simple and colocated)
Example: `src/features/reports/query.js`

```js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getReports, getReport, createReport, updateReport, deleteReport } from "../../services/reports.service";

// Minimal keys
export const reportKeys = {
  list: ["reports"],
  detail: (id) => ["reports", String(id)],
};

// Queries
export const useReports = (params = {}) =>
  useQuery({ queryKey: reportKeys.list, queryFn: () => getReports(params) });

export const useReport = (id, options = {}) =>
  useQuery({ queryKey: reportKeys.detail(id), queryFn: () => getReport(id), enabled: !!id, ...options });

// Mutations
export const useCreateReport = (options = {}) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) => createReport(data),
    onSuccess: (created) => {
      qc.invalidateQueries({ queryKey: reportKeys.list });
      if (created?.id) qc.setQueryData(reportKeys.detail(created.id), created);
      options.onSuccess?.(created);
    },
    ...options,
  });
};

export const useUpdateReport = (options = {}) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => updateReport(id, data),
    onSuccess: (updated) => {
      qc.invalidateQueries({ queryKey: reportKeys.list });
      if (updated?.id) qc.setQueryData(reportKeys.detail(updated.id), updated);
      options.onSuccess?.(updated);
    },
    ...options,
  });
};

export const useDeleteReport = (options = {}) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteReport(id),
    onSuccess: (_, id) => {
      qc.invalidateQueries({ queryKey: reportKeys.list });
      qc.removeQueries({ queryKey: reportKeys.detail(id) });
      options.onSuccess?.(_, id);
    },
    ...options,
  });
};
```

Copy this file and replace `reports` with `forms`, `news`, etc., plus the imported service functions.

## 5) Usage Examples
- List page:
```jsx
import { useReports } from "@/features/reports/query";

export default function ReportsPage() {
  const { data, isLoading, error } = useReports({ page: 1 });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

- Detail page:
```jsx
import { useReport } from "@/features/reports/query";

export default function ReportDetail({ id }) {
  const { data } = useReport(id);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

- Create:
```jsx
import { useCreateReport } from "@/features/reports/query";

function CreateReportButton() {
  const create = useCreateReport();
  return <button onClick={() => create.mutate({ title: "New" })}>Create</button>;
}
```

## Notes
- Keep it minimal: one service file + one hooks file per domain.
- Keys are simple: `['domain']` for list and `['domain', id]` for detail.
- Mutations invalidate list and update/remove detail cache for instant UI sync.
- Replicate the pattern for any new domain.
