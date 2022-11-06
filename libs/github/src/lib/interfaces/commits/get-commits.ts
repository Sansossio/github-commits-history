import { GithubPagination } from "../common/pagination";
import { GetRepository } from "../repository";

export interface GetCommits extends GetRepository, GithubPagination {}
