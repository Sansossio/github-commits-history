import { registerAs } from "@nestjs/config";

export const appConfig = registerAs('app', () => ({
  port: +process.env.PORT || +process.env.APP_PORT || 3333,
  swagger: {
    title: process.env.APP_SWAGGER_TITLE,
    description: process.env.APP_SWAGGER_DESCRIPTION,
    enable: process.env.APP_SWAGGER_ENABLE === 'true',
    path: process.env.APP_SWAGGER_PATH
  }
}))
