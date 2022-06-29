import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";

class HandsService {
  async getPlayersHands(playerId) {
    const hands = await dbContext.Hands.find({ playerId: playerId }).populate('player', 'name')
    return hands
  }
  async getById(id) {
    const hand = await dbContext.Hands.findById(id).populate('player', 'name')
    if (hand == null) {
      throw new BadRequest("Invalid hand Id")
    }
    return hand
  }
  async create(body) {
    const hand = await dbContext.Hands.create(body)
    await hand.populate('player', 'name')
    return hand
  }
  async update(update, id) {
    const original = await this.getById(id)
    if (original.creatorId.toString() != update.creatorId) {
      throw new Forbidden("You cannot update this hand")
    }
    original.bid = update.bid ? update.bid : update.bid == 0 ? update.bid : original.bid
    original.achieved = update.achieved ? update.achieved : update.achieved == 0 ? update.achieved : original.achieved
    original.score = update.score ? update.score : update.score == 0 ? update.score : original.score
    await original.save()
    await original.populate('player', 'name')
    return original
  }
  async delete(userId, handId) {
    const toDelete = await this.getById(handId)
    if (toDelete.creatorId.toString() != userId) {
      throw new Forbidden("You cannot delete this hand")
    }
    await dbContext.Hands.findByIdAndDelete(handId)
  }
}
export const handsService = new HandsService();
