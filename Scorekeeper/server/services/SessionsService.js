import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";

class SessionsService {
  async getGamesSessions(gameId) {
    const sessions = await dbContext.Sessions.find({ gameId: gameId }).populate('creator', 'name picture').populate('game', 'title')
    return sessions
  }
  async getById(id) {
    const session = await dbContext.Sessions.findById(id).populate('creator', 'name picture').populate('game', 'title')
    if (session == null) {
      throw new BadRequest('Invalid Session Id')
    }
    return session
  }
  async create(body) {
    const session = await dbContext.Sessions.create(body)
    await session.populate('creator', 'name picture')
    await session.populate('game', 'title')
    return session
  }
  async update(id, update) {
    const original = await this.getById(id)
    if (original.creatorId.toString() != update.creatorId) {
      throw new Forbidden('You cannot update this session')
    }
    original.archived = update.archived != null ? update.archived : original.archived
    original.winner = update.winner ? update.winner : original.winner
    await original.save()
    await original.populate('creator', 'name picture')
    await original.populate('game', 'title')
    return original
  }
  async delete(userId, id) {
    const toDelete = await this.getById(id)
    if (toDelete.creatorId.toString() != userId) {
      throw new Forbidden('You cannot delete this session')
    }
    await dbContext.Sessions.findByIdAndDelete(id)
  }
}
export const sessionsService = new SessionsService();
