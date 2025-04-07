import { env } from "node:process"

interface Env {
  GOOGLE_API_KEY: string
}

export function getAPIKey(cloudflareEnv: Env) {
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  return env.GOOGLE_API_KEY || cloudflareEnv.GOOGLE_API_KEY
}

