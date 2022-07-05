import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";
import { playersService } from "./PlayersService";

class HandsService {
  async getSessionsHands(sessionId) {
    const hands = await dbContext.Hands.find({ sessionId: sessionId }).populate('player', 'name')
    return hands
  }
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
    // NOTE trying to create a system of tracking total score of player
    // const player = await playersService.getById(body.playerId)
    // player.totalScore += body.score
    // await player.save()
    return hand
  }
  async update(update, id) {
    const original = await this.getById(id)
    if (original.creatorId.toString() != update.creatorId) {
      throw new Forbidden("You cannot update this hand")
    }
    original.bid = update.bid ? update.bid : update.bid == 0 ? update.bid : original.bid
    original.take = update.take ? update.take : update.take == 0 ? update.take : original.take
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
