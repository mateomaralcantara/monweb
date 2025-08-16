// frontend/src/services/api.js

const API = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export async function apiFetch(endpoint, options = {}) {
  try {
    const response = await fetch(`${API}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`❌ Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}
