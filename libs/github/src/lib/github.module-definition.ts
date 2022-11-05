import { ConfigurableModuleBuilder } from '@nestjs/common';
import { RegisterGithubModule } from './interfaces';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN: GITHUB_MODULE_TOKEN } =
  new ConfigurableModuleBuilder<RegisterGithubModule>().build();
