import { ApiProperty } from "@nestjs/swagger";
import { SimpleUser } from "@github-commits-history/github/interfaces";
import { plainToClass } from "class-transformer";

export class UserGetSimplifiedCommitsResponseDTO {
  @ApiProperty()
  id: number

  @ApiProperty()
  login: string

  @ApiProperty()
  avatar_url: string

  @ApiProperty()
  url: string

  static fromGithubResponse(user: SimpleUser): UserGetSimplifiedCommitsResponseDTO {
    return plainToClass(UserGetSimplifiedCommitsResponseDTO, {
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      url: user.url,
    })
  }
}
