import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class ParentsCommitsGithubDTO {
  @ApiProperty()
  sha: string

  @ApiProperty()
  url: string

  @ApiPropertyOptional()
  html_url?: string
}
