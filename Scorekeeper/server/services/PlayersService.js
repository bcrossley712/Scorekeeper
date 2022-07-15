import { dbContext } from "../db/DbContext";
import { Forbidden } from "../utils/Errors";

class PlayersService {
  async getSessionsPlayers(sessionId) {
    const players = await dbContext.Players.find({ sessionId: sessionId }).populate('session')
    // NOTE trying to create system to track total score of player
    // players.forEach(async p => {
    //   p.totalScore = 0
    //   let playerHands = await handsService.getPlayersHands(p.id)
    //   playerHands.forEach(h => p.totalScore += h.score)
    //   await p.save()
    // })
    return players
  }
  async getById(id) {
    const player = await dbContext.Players.findById(id).populate('session')
    return player
  }
  async create(body) {
    const player = await dbContext.Players.create(body)
    await player.populate('session')
    return player
  }
  async update(update, id) {
    const original = await this.getById(id)
    if (original.creatorId.toString() != update.creatorId) {
      throw new Forbidden('You cannot update this player')
    }
    original.name = update.name ? update.name : original.name
    original.picture = update.picture ? update.picture : original.picture
    await original.save()
    await original.populate('session')
    return original
  }
  async delete(userId, playerId) {
    const toDelete = await this.getById(playerId)
    if (toDelete.creatorId.toString() != userId) {
      throw new Forbidden('You cannot delete this player')
    }
    await dbContext.Players.findByIdAndDelete(playerId)
  }
}
export const playersService = new PlayersService();
