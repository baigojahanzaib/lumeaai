import { createAnthropic } from "@ai-sdk/anthropic"
import { createGoogleGenerativeAI } from "@ai-sdk/google-generative-ai"

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
  })

  return anthropic("claude-3-5-sonnet-20240620")
}

export function getGeminiModel(apiKey: string) {
  const google = createGoogleGenerativeAI({
    apiKey,
  })

  return google("gemini-1.5-pro")
}

