import axios from 'axios'
import { Commit, GetCommits } from "../../../../../libs/github/src/lib/interfaces";
import { environment } from "../../environments/environment";

export class ApiService {
  private static apiConfig = environment.api

  private static getAxiosClient() {
    return axios.create({ baseURL: this.apiConfig.url })
  }

  static async getCommits(config: GetCommits): Promise<Commit[]> {
    const { data: commits }= await this.getAxiosClient()
      .get(
        '/commits',
        {
          params: {
            owner: config.owner,
            repository: config.repository,
            page: config.page,
            per_page: config.per_page,
          }
        }
      )
    return commits
  }
}
