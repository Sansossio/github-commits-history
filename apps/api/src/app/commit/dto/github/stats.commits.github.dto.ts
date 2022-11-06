import { ApiPropertyOptional } from "@nestjs/swagger"

export class StatsCommitsGithubDTO {
  @ApiPropertyOptional()
  additions?: number
  
  @ApiPropertyOptional()
  deletions?: number
  
  @ApiPropertyOptional()
  total?: number
}
