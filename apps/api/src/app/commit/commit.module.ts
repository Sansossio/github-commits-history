import { Module } from "@nestjs/common";
import { CommitService } from "./service/commit.service";
import { CommitController } from "./controller/commit.controller";

@Module({
  controllers: [CommitController],
  providers: [CommitService],
})
export class CommitModule {}
