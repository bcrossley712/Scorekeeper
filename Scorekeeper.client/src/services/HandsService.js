import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HandsService {
  async getSessionsHands(sessionId) {
    const res = await api.get(`api/sessions/${sessionId}/hands`)
    logger.log("[getSessionsHands]", res.data)
    AppState.hands = res.data
  }
  async addHand(body) {
    const res = await api.post(`api/hands`, body)
    logger.log('[addHand]', res.data)
    AppState.hands = [...AppState.hands, res.data]
  }
  async editHand(body) {
    logger.error("Not set up")
  }
  async deleteHand(handId) {
    logger.error("Not set up")
  }
}
export const handsService = new HandsService()