import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './github.module-definition';
import { GithubService } from './service/github.service';

@Module({
  imports: [HttpModule],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule extends ConfigurableModuleClass {}
