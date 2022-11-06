import { ApiPropertyOptional } from "@nestjs/swagger"
import { GitUser } from "@github-commits-history/github/interfaces";

export class GitUserGithubDTO implements GitUser {
  @ApiPropertyOptional()
  name?: string
  
  @ApiPropertyOptional()
  email?: string
  
  @ApiPropertyOptional()
  date?: string
}
