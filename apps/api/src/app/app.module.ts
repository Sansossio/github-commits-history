import { Module } from '@nestjs/common';
import { CommitModule } from './commit/commit.module';
import { InternalModule } from './internal.module';

@Module({
  imports: [
    InternalModule,
    CommitModule
  ]
})
export class AppModule {}
