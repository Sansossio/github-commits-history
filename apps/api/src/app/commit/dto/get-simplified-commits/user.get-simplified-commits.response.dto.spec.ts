import { UserGetSimplifiedCommitsResponseDTO } from './user.get-simplified-commits.response.dto'

describe('UserGetSimplifiedCommitsResponseDTO', () => {
  it('should be defined', () => {
    expect(UserGetSimplifiedCommitsResponseDTO).toBeDefined()
  })

  it('should match snapshot', () => {
    const user: any = {
      id: 123,
      login: 'username',
      avatar_url: 'https://google.com',
      url: 'https://yahoo.com'
    }

    expect(UserGetSimplifiedCommitsResponseDTO.fromGithubResponse(user)).toMatchSnapshot()
  })
})