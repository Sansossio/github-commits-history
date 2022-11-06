import { Module } from "@nestjs/common";
import { GithubModule } from "@github-commits-history/github";
import { CommitService } from "./service/commit.service";
import { CommitController } from "./controller/commit.controller";

@Module({
  imports: [
    GithubModule.register({})
  ],
  controllers: [CommitController],
  providers: [CommitService],
})
export class CommitModule {}
