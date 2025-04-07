type CommonRequest = Omit<RequestInit, "body"> & { body?: URLSearchParams }

export async function request(url: string, init?: CommonRequest) {
  if (import.meta.env.DEV) {
    // Use dynamic import for node-fetch
    const { default: nodeFetch } = await import("node-fetch")
    // Use regular import for https
    const { Agent } = await import("https")

    const agent = url.startsWith("https") ? new Agent({ rejectUnauthorized: false }) : undefined

    return nodeFetch(url, { ...init, agent })
  }

  return fetch(url, init)
}

