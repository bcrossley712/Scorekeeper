import { dbContext } from "../db/DbContext";

class HandsService {
  async getPlayersHands(playerId) {
    const hands = await dbContext.Hands.find({ playerId: playerId }).populate('creator', 'name picture').populate('player', 'name')
    return hands
  }
}
export const handsService = new HandsService();
