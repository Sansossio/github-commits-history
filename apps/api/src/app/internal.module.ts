import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GithubModule } from "@github-commits-history/github";
import config from "../config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: config
    }),

    GithubModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (config: ConfigService) => ({
        baseUrl: config.get<string>('github.baseUrl')
      }),
      inject: [ConfigService]
    })
  ]
})
export class InternalModule {}
