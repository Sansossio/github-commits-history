import { Module } from "@nestjs/common";
import { GithubModule } from "@github-commits-history/github";
import { RepositoryService } from "./service/repository.service";
import { RepositoryController } from "./controller/repository.controller";

@Module({
  imports: [
    GithubModule.register({})
  ],
  controllers: [RepositoryController],
  providers: [RepositoryService],
})
export class RepositoryModule {}
