import { HttpService } from "@nestjs/axios";
import { Inject, Injectable } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { GITHUB_MODULE_TOKEN } from "../github.module-definition";
import { Commit, GetCommit, GetCommits, RegisterGithubModule } from "../interfaces";
import { githubConfig } from '../config/github.config';

@Injectable()
export class GithubService {
  private readonly baseUrl = this.configuration.baseUrl ?? githubConfig.baseUrl;

  constructor(
    @Inject(GITHUB_MODULE_TOKEN)
    private readonly configuration: RegisterGithubModule,

    private readonly httpService: HttpService
  ) {}

  private getAuthHeader() {
    const { apiToken }  = this.configuration
    if (!apiToken) {
      return {}
    }
    return {
      authorization: `Bearer ${this.configuration.apiToken}`
    }
  }

  getCommitsHistory (config: GetCommits): Observable<Commit[]> {
    return this.httpService.request<Commit[]>({
      baseURL: this.baseUrl,
      url: `repos/${config.owner}/${config.repository}/commits`,
      params: {
        page: config.page,
        per_page: config.per_page,
      },
      headers: this.getAuthHeader()
    })
      .pipe(map((val) => val.data))
  }

  getCommit (config: GetCommit): Observable<Commit> {
    return this.httpService.request<Commit>({
      baseURL: this.baseUrl,
      url: `repos/${config.owner}/${config.repository}/commits/${config.ref}`,
      headers: this.getAuthHeader()
    })
      .pipe(map((val) => val.data))
  }
}
