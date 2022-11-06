import { HttpStatus, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { firstValueFrom, of, throwError } from 'rxjs'
import { CommitService } from './commit.service'

describe('CommitService', () => {
  const githubService = {
    getCommitsHistory: jest.fn(),
  }
  const service = new CommitService(githubService as any)
  const query = {
    owner: 'test_owner',
    repository: 'repo'
  }
  
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(CommitService).toBeDefined()
  })

  describe('getCommits', () => {
    it('should match snapshot', async () => {
      const response = [
        {
          id: 1234
        },
        {
          id: 321
        }
      ]
      githubService.getCommitsHistory.mockImplementation(() => of(response))

      await expect(firstValueFrom(service.getCommits(query))).resolves.toEqual(response)
    })

    it('should throw not found when fails', async () => {
      const error: any = new Error()
      error.response = {
        status: HttpStatus.NOT_FOUND
      }
      githubService.getCommitsHistory.mockImplementation(() => throwError(() => error))

      await expect(firstValueFrom(service.getCommits(query))).rejects.toBeInstanceOf(NotFoundException)
    })

    it('should throw internal server error when is an unhandler error', async () => {
      const error: any = new Error()
      error.response = {
        status: HttpStatus.BAD_GATEWAY
      }
      githubService.getCommitsHistory.mockImplementation(() => throwError(() => error))

      await expect(firstValueFrom(service.getCommits(query))).rejects.toBeInstanceOf(InternalServerErrorException)
    })
  })

  describe('getSimplifiedCommits', () => {
    it('should match snapshot', async () => {
      const response = [
        {
          sha: 'sha1',
          commit: {
            message: 'test message',
            committer: {
              date: new Date(2021, 10, 7, 1, 0, 0, 0)
            },
          },
          author: {},
          committer: {}
        },
        {
          sha: 'sha2',
          commit: {
            message: 'test message',
            committer: {
              date: new Date(2001, 10, 7, 1, 0, 0, 0)
            },
          },
          author: {},
          committer: {}
        }
      ]
      githubService.getCommitsHistory.mockImplementation(() => of(response))

      await expect(firstValueFrom(service.getSimplifiedCommits(query))).resolves.toMatchSnapshot()
    })
  })
})
