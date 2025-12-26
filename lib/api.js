const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch(path, options = {}) {
  const {
    method = "GET",
    body,
    token,
    cache = "no-store", // good default while developing
    next, // for Next.js caching when using Server Components
  } = options;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    cache,
    next,
  });

  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json()
    : null;

  if (!res.ok) {
    const message = data?.message || `Request failed: ${res.status}`;
    throw new Error(message);
  }

  return data;
}
