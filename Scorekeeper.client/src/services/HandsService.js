import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HandsService {
  async getSessionsHands(sessionId) {
    const res = await api.get(`api/sessions/${sessionId}/hands`)
    logger.log("[getSessionsHands]", res.data)
    AppState.hands = res.data
  }
}
export const handsService = new HandsService()