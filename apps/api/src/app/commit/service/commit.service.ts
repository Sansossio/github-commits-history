import { ForbiddenException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { GithubService } from "@github-commits-history/github";
import { Commit, GetCommits } from "@github-commits-history/github/interfaces";
import { catchError, map, Observable, } from "rxjs";
import { GetSimplifiedCommitsResponseDTO } from "../dto/get-simplified-commits/get-simplified-commits.response.dto";
import { GetCommitRequestDTO } from "../dto/get-commit/get-commit.request.dto";

@Injectable()
export class CommitService {
  constructor(private readonly github: GithubService) {}

  getCommits(query: GetCommits): Observable<Commit[]>  {
    return this.github.getCommitsHistory(query)
      .pipe(
        catchError((err) => {
          if (err.response.status === HttpStatus.NOT_FOUND) {
            throw new NotFoundException()
          }

          if (err.response.status === HttpStatus.FORBIDDEN) {
            throw new ForbiddenException("Api limit exceeded")
          }

          throw new InternalServerErrorException()
        })
      )
  }

  getCommit(query: GetCommitRequestDTO): Observable<Commit> {
    return this.github.getCommit(query)
  }

  getSimplifiedCommits(query: GetCommits): Observable<GetSimplifiedCommitsResponseDTO[]> {
    return this.getCommits(query)
      .pipe(map((val) => val.map(item => GetSimplifiedCommitsResponseDTO.fromGithubResponse(item))))
  }
}
