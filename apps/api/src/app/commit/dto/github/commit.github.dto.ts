import { ApiProperty } from "@nestjs/swagger";
import { GitUserGithubDTO } from "./gituser.github.dto";
import { TreeGithubDTO } from "./tree.github.dto";

export class CommitGithubDTO {
  @ApiProperty()
  url: string
  
  @ApiProperty()
  author: GitUserGithubDTO
  
  @ApiProperty()
  committer: GitUserGithubDTO
  
  @ApiProperty()
  message: string
  
  @ApiProperty()
  comment_count: number

  @ApiProperty({ type: TreeGithubDTO })
  tree: TreeGithubDTO
}
