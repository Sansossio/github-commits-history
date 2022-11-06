import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GetCommits } from '@github-commits-history/github/interfaces';
import { IsNotEmpty, IsOptional, IsPositive, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { DEFAULT_CONFIGURATION } from '@github-commits-history/configuration'

const MAX_RESULTS_PER_PAGE = 100

export class GetCommitsRequestDTO implements GetCommits {
  @ApiProperty({ example: DEFAULT_CONFIGURATION.repository.owner })
  @IsString()
  @IsNotEmpty()
  owner: string

  @ApiProperty({ example: DEFAULT_CONFIGURATION.repository.repository })
  @IsString()
  @IsNotEmpty()
  repository: string

  @ApiPropertyOptional({
    description: 'Page number of the results to fetch.',
    example: 1
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  page?: number

  @ApiPropertyOptional({
    description: 'The number of results per page (max 100).',
    example: 10
  })
  @IsOptional()
  @IsPositive()
  @Max(MAX_RESULTS_PER_PAGE)
  @Type(() => Number)
  per_page?: number
}
