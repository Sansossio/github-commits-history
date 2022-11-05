import { ApiProperty } from '@nestjs/swagger';
import { GetRepository } from '@github-commits-history/github/interfaces';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCommitsRequestDTO implements GetRepository {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  owner: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  repository: string
}
