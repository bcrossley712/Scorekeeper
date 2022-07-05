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
    let index = AppState.hands.findIndex(h => h.id == body.id)
    const res = await api.put(`api/hands/${body.id}`, body)
    logger.log("[editHand]", res.data)
    AppState.hands.splice(index, 1, res.data)
  }
  async deleteHand(handId) {
    let index = AppState.hands.findIndex(h => h.id == handId)
    const res = await api.delete(`api/hands/${handId}`)
    logger.log("[deleteHand]", res.data)
    AppState.hands.splice(index, 1)
  }
}
export const handsService = new HandsService()