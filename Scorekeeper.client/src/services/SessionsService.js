import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SessionsService {
  async getGamesSessions(gameId) {
    const res = await api.get(`api/games/${gameId}/sessions`)
    logger.log("[getGamesSessions]", res.data)
    AppState.sessions = res.data.reverse()
  }
  async getSessionById(sessionId) {
    const res = await api.get(`api/sessions/${sessionId}`)
    logger.log("[getSessionById]", res.data)
    AppState.activeSession = res.data
    return res.data
  }
  async addSession(body) {
    const res = await api.post(`api/sessions`, body)
    logger.log("[addSession]", res.data)
    AppState.sessions = [...AppState.sessions, res.data]
    return res.data
  }
}
export const sessionsService = new SessionsService()