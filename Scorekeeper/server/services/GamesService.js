import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";

class GamesService {
  async getAll() {
    const games = await dbContext.Games.find().populate('creator', 'name picture')
    return games
  }
  async getById(id) {
    const game = await dbContext.Games.findById(id).populate('creator', 'name picture')
    if (game == null) {
      throw new BadRequest("Invalid Game Id")
    }
    return game
  }
  async create(body) {
    const game = await dbContext.Games.create(body)
    await game.populate('creator', 'name picture')
    return game
  }
  async update(id, update) {
    const original = await this.getById(id)
    if (original.creatorId.toString() != update.creatorId) {
      throw new Forbidden('You are not allowed to update this game')
    }
    original.title = update.title ? update.title : original.title
    original.image = update.image ? update.image : original.image
    original.scoring = update.scoring ? update.scoring : original.scoring
    original.rules = update.rules ? update.rules : original.rules
    original.highScore = update.highScore ? update.highScore : original.highScore
    original.bestPlayer = update.bestPlayer ? update.bestPlayer : original.bestPlayer
    await original.save()
    await original.populate('creator', 'name picture')
    return original
  }
  async delete(id, userId) {
    const toDelete = await this.getById(id)
    if (userId != toDelete.creatorId.toString()) {
      throw new Forbidden("You are not allowed to delete this game")
    }
    await dbContext.Games.findByIdAndDelete(id)
  }
}
export const gamesService = new GamesService();
