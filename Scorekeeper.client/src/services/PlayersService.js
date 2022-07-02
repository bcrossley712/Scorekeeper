import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PlayersService {
  async getSessionsPlayers(sessionId) {
    const res = await api.get(`api/sessions/${sessionId}/players`)
    logger.log("[getSessionsPlayers]", res.data)
    AppState.players = res.data
  }
  async addPlayer(body) {
    const res = await api.post(`api/players`, body)
    logger.log("[addPlayers]", res.data)
    AppState.players = [...AppState.players, res.data]
  }
}
export const playersService = new PlayersService()