import { ApiProperty } from "@nestjs/swagger";
import { Commit } from "@github-commits-history/github/interfaces";
import { UserGetSimplifiedCommitsResponseDTO } from "./user.get-simplified-commits.response.dto";
import { plainToClass } from "class-transformer";

export class GetSimplifiedCommitsResponseDTO {
  @ApiProperty()
  sha: string

  @ApiProperty()
  message: string

  @ApiProperty()
  url: string

  @ApiProperty()
  date: Date

  @ApiProperty({ type: UserGetSimplifiedCommitsResponseDTO })
  author: UserGetSimplifiedCommitsResponseDTO;

  @ApiProperty({ type: UserGetSimplifiedCommitsResponseDTO })
  committer: UserGetSimplifiedCommitsResponseDTO;

  static fromGithubResponse(response: Commit): GetSimplifiedCommitsResponseDTO {
    return plainToClass(GetSimplifiedCommitsResponseDTO, {
      sha: response.sha,
      message: response.commit.message,
      url: response.url,
      date: response.commit.committer.date ? new Date(response.commit.committer.date) : new Date(response.commit.author.date),
      author: UserGetSimplifiedCommitsResponseDTO.fromGithubResponse(response.author),
      committer: UserGetSimplifiedCommitsResponseDTO.fromGithubResponse(response.committer),
    })
  }
}
