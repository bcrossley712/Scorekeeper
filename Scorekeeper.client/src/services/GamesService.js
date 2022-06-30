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
  }
}
export const gamesService = new GamesService()