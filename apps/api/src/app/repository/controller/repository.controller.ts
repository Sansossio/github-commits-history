import { Controller, Get, Query } from "@nestjs/common";
import { GET_COMMITS_PATH, REPOSITORY_URL } from '@github-commits-history/api-interface'
import { GetCommitsRequestDTO } from "../dto/get-commits/get-commits.request.dto";
import { RepositoryService } from "../service/repository.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { Commit } from "@github-commits-history/github/interfaces";
import { GetCommitsResponseDTO } from "../dto/get-commits/get-commits.response.dto";

@Controller(REPOSITORY_URL)
@ApiTags('Repository')
export class RepositoryController {
  constructor (private readonly service: RepositoryService) {}

  @Get(GET_COMMITS_PATH)
  @ApiOkResponse({ type: GetCommitsResponseDTO, isArray: true })
  @ApiOperation({
    summary: 'Get repository commits'
  })
  getCommits(@Query() query: GetCommitsRequestDTO): Observable<Commit[]> {
    return this.service.getCommits(query);
  }
}