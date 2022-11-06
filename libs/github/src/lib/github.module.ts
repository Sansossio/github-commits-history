import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './github.module-definition';
import { GithubService } from './service/github.service';

@Module({
  imports: [HttpModule],
  providers: [GithubService],
  exports: [GithubService],
})
@Global()
export class GithubModule extends ConfigurableModuleClass {}
