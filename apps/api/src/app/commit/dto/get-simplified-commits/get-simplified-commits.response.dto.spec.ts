import { GetSimplifiedCommitsResponseDTO } from './get-simplified-commits.response.dto'

describe('GetSimplifiedCommitsResponseDTO', () => {
  it('should be defined', () => {
    expect(GetSimplifiedCommitsResponseDTO).toBeDefined()
  })

  it('should match snapshot using commit.commiter.date', () => {
    const obj: any = {
      sha: 'sha',
      commit: {
        message: 'test message',
        committer: {
          date: new Date(2022, 10, 7, 1, 0, 0, 0)
        },
      },
      author: {},
      committer: {},
      url: 'https://test.com'
    }
    expect(GetSimplifiedCommitsResponseDTO.fromGithubResponse(obj)).toMatchSnapshot()
  })

  it('should match snapshot using commit.author.date', () => {
    const obj: any = {
      sha: 'sha',
      commit: {
        message: 'test message',
        committer: {},
        author: {
          date: new Date(2021, 10, 7, 1, 0, 0, 0)
        }
      },
      author: {},
      committer: {},
      url: 'https://test.com'
    }
    expect(GetSimplifiedCommitsResponseDTO.fromGithubResponse(obj)).toMatchSnapshot()
  })
})
