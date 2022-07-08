import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GamesService {
  async getGames() {
    const res = await api.get('api/games')
    logger.log("[getGames]", res.data)
    AppState.games = res.data
  }
  async getGameById(id) {
    const res = await api.get(`api/games/${id}`)
    logger.log("[getGameById]", res.data)
    AppState.activeGame = res.data
    return res.data
  }
  async addGame(body) {
    const res = await api.post(`api/games`, body)
    logger.log("[addGame]", res.data)
    AppState.games = [...AppState.games, res.data]
  }
  async editGame(body) {
    let index = AppState.games.findIndex(g => g.id == body.id)
    const res = await api.put(`api/games/${body.id}`, body)
    logger.log("[editGame]", res.data)
    AppState.games.splice(index, 1, res.data)
  }
  async deleteGame(id) {
    let index = AppState.games.findIndex(g => g.id == id)
    const res = await api.delete(`api/games/${id}`)
    logger.log("[deleteGame]", res.data)
    AppState.games.splice(index, 1)
  }
}
export const gamesService = new GamesService()