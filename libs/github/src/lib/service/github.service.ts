import { HttpService } from "@nestjs/axios";
import { Inject, Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { GITHUB_MODULE_TOKEN } from "../github.module-definition";
import { Commit, GetCommits, RegisterGithubModule } from "../interfaces";
import { githubConfig } from '../config/github.config';

@Injectable()
export class GithubService {
  private readonly baseUrl = this.configuration.baseUrl ?? githubConfig.baseUrl;

  constructor(
    @Inject(GITHUB_MODULE_TOKEN)
    private readonly configuration: RegisterGithubModule,

    private readonly httpService: HttpService
  ) {}

  getCommitsHistory (config: GetCommits): Observable<Commit[]> {
    return this.httpService.request<Commit[]>({
      baseURL: this.baseUrl,
      url: `repos/${config.owner}/${config.repository}/commits`,
      params: {
        page: config.page,
        per_page: config.per_page,
      }
    })
      .pipe(map((val) => val.data))
  }
}
