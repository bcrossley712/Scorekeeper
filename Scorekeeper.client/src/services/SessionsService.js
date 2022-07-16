import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { playersService } from "./PlayersService"

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
  async archiveSession(body) {
    await playersService.getSessionsPlayers(body.id)
    const players = AppState.players
    let topScore = null
    if (body.game.lowScoreWins) {
      players.forEach(p => {
        if (topScore == null || p.totalScore < topScore) {
          topScore = p.totalScore
          body.winner = p.name
        } else if (p.totalScore == topScore) {
          body.winner = body.winner + `, ${p.name}`
        }
      })
    } else {
      players.forEach(p => {
        if (topScore == null || p.totalScore > topScore) {
          topScore = p.totalScore
          body.winner = p.name
        } else if (p.totalScore == topScore) {
          body.winner = body.winner + `, ${p.name}`
        }
      })
    }
    const index = AppState.sessions.findIndex(s => s.id == body.id)
    const res = await api.put(`api/sessions/${body.id}`, body)
    logger.log("[archiveSession]", res.data)
    AppState.sessions.splice(index, 1, res.data)
  }
  async deleteSession(id) {
    const index = AppState.sessions.findIndex(s => s.id == id)
    const res = await api.delete(`api/sessions/${id}`)
    logger.log("[deleteSession]", res.data)
    AppState.sessions.splice(index, 1)
  }
}
export const sessionsService = new SessionsService()