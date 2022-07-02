import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PlayersService {
  async getSessionsPlayers(sessionId) {
    const res = await api.get(`api/sessions/${sessionId}/players`)
    logger.log("[getSessionsPlayers]", res.data)
    AppState.players = res.data
  }
  async addPlayer() {
    logger.error('Need to set up')
  }
}
export const playersService = new PlayersService()