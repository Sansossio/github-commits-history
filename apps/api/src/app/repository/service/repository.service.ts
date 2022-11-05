import { HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { GithubService } from "@github-commits-history/github";
import { Commit, GetRepository } from "@github-commits-history/github/interfaces";
import { catchError, Observable, } from "rxjs";

@Injectable()
export class RepositoryService {
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
}
