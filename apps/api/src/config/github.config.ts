import { registerAs } from "@nestjs/config";

export const githubConfig = registerAs('github', () => ({
  baseUrl: process.env.GITHUB_BASE_URL,
}))
