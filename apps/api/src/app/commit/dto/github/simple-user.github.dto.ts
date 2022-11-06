import { SimpleUser } from "@github-commits-history/github/interfaces";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class SimpleUserGithubDTO implements SimpleUser {
  @ApiPropertyOptional()
  name?: string

  @ApiPropertyOptional()
  email?: string

  @ApiProperty()
  login: string

  @ApiProperty()
  id: number

  @ApiProperty()
  node_id: string

  @ApiProperty()
  avatar_url: string

  @ApiProperty()
  gravatar_id: string

  @ApiProperty()
  url: string

  @ApiProperty()
  html_url: string

  @ApiProperty()
  followers_url: string

  @ApiProperty()
  following_url: string

  @ApiProperty()
  gists_url: string

  @ApiProperty()
  starred_url: string

  @ApiProperty()
  subscriptions_url: string

  @ApiProperty()
  organizations_url: string

  @ApiProperty()
  repos_url: string

  @ApiProperty()
  events_url: string

  @ApiProperty()
  received_events_url: string

  @ApiProperty()
  type: string

  @ApiProperty()
  site_admin: boolean

  @ApiPropertyOptional()
  starred_at?: string
}