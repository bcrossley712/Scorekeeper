import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SessionsService {
  async getGamesSessions(gameId) {
    const res = await api.get(`api/games/${gameId}/sessions`)
    logger.log("[getGamesSessions]", res.data)
    AppState.sessions = res.data
  }
}
export const sessionsService = new SessionsService()