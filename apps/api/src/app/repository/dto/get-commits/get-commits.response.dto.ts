import { Commit } from "@github-commits-history/github/interfaces";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CommitGithubDTO } from "../github/commit.github.dto";
import { FilesCommitsGithubDTO } from "../github/files.commits.github.dto";
import { ParentsCommitsGithubDTO } from "../github/parents.commits.github.dto";
import { SimpleUserGithubDTO } from "../github/simple-user.github.dto";
import { StatsCommitsGithubDTO } from "../github/stats.commits.github.dto";

export class GetCommitsResponseDTO implements Commit {
  @ApiProperty()
  url: string

  @ApiProperty()
  sha: string

  @ApiProperty()
  node_id: string

  @ApiProperty()
  html_url: string

  @ApiProperty()
  comments_url: string

  @ApiProperty({ type: CommitGithubDTO })
  commit: CommitGithubDTO

  @ApiProperty({ type: SimpleUserGithubDTO })
  author: SimpleUserGithubDTO;

  @ApiProperty({ type: SimpleUserGithubDTO })
  committer: SimpleUserGithubDTO;

  @ApiProperty({ type: ParentsCommitsGithubDTO, isArray: true })
  parents: ParentsCommitsGithubDTO[]

  @ApiPropertyOptional({ type: StatsCommitsGithubDTO })
  stats?: StatsCommitsGithubDTO;

  @ApiPropertyOptional({ type: FilesCommitsGithubDTO, isArray: true })
  files?: FilesCommitsGithubDTO[];
}
