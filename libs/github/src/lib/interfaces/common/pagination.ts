export interface GithubPagination {
  /**
   * Page number of the results to fetch.
   * @default 1
   */
  page?: number

  /**
   * The number of results per page (max 100).
   * @default 30
   */
   per_page?: number
}
