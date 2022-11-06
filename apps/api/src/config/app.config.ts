import { registerAs } from "@nestjs/config";

export const appConfig = registerAs('app', () => ({
  port: +process.env.PORT || +process.env.APP_PORT || 3333,
  swagger: {
    enable: process.env.APP_SWAGGER_ENABLE === 'true',
    path: process.env.APP_SWAGGER_PATH
  }
}))
