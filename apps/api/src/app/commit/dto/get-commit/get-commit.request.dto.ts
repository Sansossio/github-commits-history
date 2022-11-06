import { ApiProperty } from '@nestjs/swagger';
import { GetCommits } from '@github-commits-history/github/interfaces';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCommitRequestDTO implements GetCommits {
  @ApiProperty({ example: 'Sansossio' })
  @IsString()
  @IsNotEmpty()
  owner: string

  @ApiProperty({ example: 'github-commits-history' })
  @IsString()
  @IsNotEmpty()
  repository: string

  @ApiProperty({ example: 'efc9f58b98f96e06ef5b1482c87392693e6b6cbb' })
  @IsString()
  @IsNotEmpty()
  ref: string
}
