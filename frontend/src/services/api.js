const API = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
export async function apiFetch(endpoint, options = {}) {
  const url = `${API}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`);
  return res.json();
}
