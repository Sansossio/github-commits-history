import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GithubModule } from "@github-commits-history/github";
import { ServeStaticModule } from '@nestjs/serve-static';
import config from "../config";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/api/.env',
      load: config
    }),
    GithubModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (config: ConfigService) => ({
        baseUrl: config.get<string>('github.baseUrl'),
        apiToken: config.get<string>('github.apiToken')
      }),
      inject: [ConfigService]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public')
    })
  ]
})
export class InternalModule {}
