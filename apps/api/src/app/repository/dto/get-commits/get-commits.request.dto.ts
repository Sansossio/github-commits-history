import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GetCommits } from '@github-commits-history/github/interfaces';
import { IsNotEmpty, IsOptional, IsPositive, IsString, Max } from 'class-validator';
import { Type } from 'class-transformer';

const MAX_RESULTS_PER_PAGE = 100

export class GetCommitsRequestDTO implements GetCommits {
  @ApiProperty({ example: 'Sansossio' })
  @IsString()
  @IsNotEmpty()
  owner: string

  @ApiProperty({ example: 'github-commits-history' })
  @IsString()
  @IsNotEmpty()
  repository: string

  @ApiPropertyOptional({
    description: 'Page number of the results to fetch.',
    example: 1
  })
  @IsOptional()
  @IsPositive()
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
