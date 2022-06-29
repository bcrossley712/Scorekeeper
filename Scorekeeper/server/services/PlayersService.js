import { dbContext } from "../db/DbContext";
import { Forbidden } from "../utils/Errors";

class PlayersService {
  async getSessionsPlayers(sessionId) {
    const players = await dbContext.Players.find({ sessionId: sessionId }).populate('creator', 'name picture').populate('session')
    return players
  }
  async getById(id) {
    const player = await dbContext.Players.findById(id).populate('creator', 'name picture').populate('session')
    return player
  }
  async create(body) {
    const player = await dbContext.Players.create(body)
    await player.populate('creator', 'name picture')
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
    await original.populate('creator', 'name picture')
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
