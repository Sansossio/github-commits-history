import { ApiProperty } from "@nestjs/swagger";

export class TreeGithubDTO {
  @ApiProperty()
  sha: string

  @ApiProperty()
  url: string

  [k: string]: unknown
}
