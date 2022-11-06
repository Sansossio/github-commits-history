import { Controller, Get, Query } from "@nestjs/common";
import { COMMIT_URL, GET_COMMITS_PATH, GET_SIMPLIFIED_COMMITS_PATH } from '@github-commits-history/api-interface'
import { GetCommitsRequestDTO } from "../dto/get-commits/get-commits.request.dto";
import { CommitService } from "../service/commit.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Observable } from "rxjs";
import { Commit } from "@github-commits-history/github/interfaces";
import { GetCommitsResponseDTO } from "../dto/get-commits/get-commits.response.dto";
import { GetSimplifiedCommitsResponseDTO } from "../dto/get-simplified-commits/get-simplified-commits.response.dto";

@Controller(COMMIT_URL)
@ApiTags('Commits')
export class CommitController {
  constructor (private readonly service: CommitService) {}

  @Get(GET_COMMITS_PATH)
  @ApiOkResponse({ type: GetCommitsResponseDTO, isArray: true })
  @ApiOperation({
    summary: 'Get repository commits'
  })
  getCommits(@Query() query: GetCommitsRequestDTO): Observable<Commit[]> {
    return this.service.getCommits(query);
  }

  @Get(GET_SIMPLIFIED_COMMITS_PATH)
  @ApiOkResponse({ type: GetSimplifiedCommitsResponseDTO, isArray: true })
  @ApiOperation({
    summary: 'Get repository commits (simplified)'
  })
  getSimplifiedCommits(@Query() query: GetCommitsRequestDTO): Observable<GetSimplifiedCommitsResponseDTO[]> {
    return this.service.getSimplifiedCommits(query);
  }
}
