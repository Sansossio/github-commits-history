import { INestApplication, Logger } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from "@nestjs/config";
import { version } from '../../../package.json';

const LOGGER_CONTEXT = 'Swagger'

export function setupSwagger(app: INestApplication) {
  const configService = app.get(ConfigService)

  const [
    appPort,
    swaggerPath,
    title,
    description
  ] = [
    configService.get<number>('app.port'),
    configService.get<string>('app.swagger.path'),
    configService.get<string>('app.swagger.title'),
    configService.get<string>('app.swagger.description')
  ]

  if (configService.get<boolean>('app.swagger.enable')) {
    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(swaggerPath, app, document);
    Logger.log(`🚀 Swagger is running on: http://localhost:${appPort}/${swaggerPath}`, LOGGER_CONTEXT);
    return
  }
  Logger.log('Logger is disabled by configuration', LOGGER_CONTEXT)
}