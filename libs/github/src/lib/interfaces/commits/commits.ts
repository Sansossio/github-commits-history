/**
 * Commit
 */
export interface Commit {
  url: string
  sha: string
  node_id: string
  html_url: string
  comments_url: string
  commit: {
    url: string
    author: null | GitUser
    committer: null | GitUser
    message: string
    comment_count: number
    tree: {
      sha: string
      url: string
      [k: string]: unknown
    }
    verification?: Verification
  }
  author: null | SimpleUser
  committer: null | SimpleUser
  parents: {
    sha: string
    url: string
    html_url?: string
  }[]
  stats?: {
    additions?: number
    deletions?: number
    total?: number
  }
  files?: DiffEntry[]
}
/**
 * Metaproperties for Git author/committer information.
 */
export interface GitUser {
  name?: string
  email?: string
  date?: string
}

export interface Verification {
  verified: boolean
  reason: string
  payload: string | null
  signature: string | null
}
/**
 * A GitHub user.
 */
export interface SimpleUser {
  name?: string | null
  email?: string | null
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  starred_at?: string
}

export enum DiffEntryStatus {
  ADDED = 'added',
  REMOVED = 'removed',
  MODIFIED = 'modified',
  RENAMED = 'renamed',
  COPIED = 'copied',
  CHANGED = 'changed',
  UNCHANGED = 'unchanged',
}

/**
 * Diff Entry
 */
export interface DiffEntry {
  sha: string
  filename: string
  status: DiffEntryStatus
  additions: number
  deletions: number
  changes: number
  blob_url: string
  raw_url: string
  contents_url: string
  patch?: string
  previous_filename?: string
}
