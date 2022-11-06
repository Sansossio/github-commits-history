import { GetRepository } from "../repository";

export interface GetCommit extends GetRepository {
  /**
   * ref parameter
   */
  ref: string
}
