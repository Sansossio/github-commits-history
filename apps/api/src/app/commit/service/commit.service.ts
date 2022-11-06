import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { GithubService } from "@github-commits-history/github";
import { Commit, GetRepository } from "@github-commits-history/github/interfaces";
import { catchError, map, Observable, } from "rxjs";
import { GetSimplifiedCommitsResponseDTO } from "../dto/get-simplified-commits/get-simplified-commits.response.dto";

@Injectable()
export class CommitService {
  constructor(private readonly github: GithubService) {}

  getCommits(query: GetRepository): Observable<Commit[]>  {
    return this.github.getCommitsHistory(query)
      .pipe(
        catchError((err) => {
          if (err.response.status === HttpStatus.NOT_FOUND) {
            throw new NotFoundException()
          }

          throw new InternalServerErrorException()
        })
      )
  }

  getSimplifiedCommits(query: GetRepository): Observable<GetSimplifiedCommitsResponseDTO[]> {
    return this.getCommits(query)
      .pipe(map((val) => val.map(item => GetSimplifiedCommitsResponseDTO.fromGithubResponse(item))))
  }
}
