import { ApiProperty } from '@nestjs/swagger';
import { GetCommits } from '@github-commits-history/github/interfaces';
import { IsNotEmpty, IsString } from 'class-validator';
import { DEFAULT_CONFIGURATION } from '@github-commits-history/configuration'

export class GetCommitRequestDTO implements GetCommits {
  @ApiProperty({ example: DEFAULT_CONFIGURATION.repository.owner })
  @IsString()
  @IsNotEmpty()
  owner: string

  @ApiProperty({ example: DEFAULT_CONFIGURATION.repository.repository })
  @IsString()
  @IsNotEmpty()
  repository: string

  @ApiProperty({ example: DEFAULT_CONFIGURATION.repository.ref })
  @IsString()
  @IsNotEmpty()
  ref: string
}
