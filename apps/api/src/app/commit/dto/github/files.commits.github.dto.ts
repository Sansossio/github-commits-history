import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { DiffEntryStatus } from "@github-commits-history/github/interfaces";

export class FilesCommitsGithubDTO {
  @ApiProperty()
  sha: string
  
  @ApiProperty()
  filename: string
  
  @ApiProperty({ enum: DiffEntryStatus })
  status: DiffEntryStatus
  
  @ApiProperty()
  additions: number
  
  @ApiProperty()
  deletions: number
  
  @ApiProperty()
  changes: number
  
  @ApiProperty()
  blob_url: string
  
  @ApiProperty()
  raw_url: string
  
  @ApiProperty()
  contents_url: string
  
  @ApiPropertyOptional()
  patch?: string
  
  @ApiPropertyOptional()
  previous_filename?: string
}
