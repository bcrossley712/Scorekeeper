import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";

class GamesService {
  async getAll() {
    const games = await dbContext.Games.find()
    return games
  }
  async getById(id) {
    const game = await dbContext.Games.findById(id)
    if (game == null) {
      throw new BadRequest("Invalid Game Id")
    }
    return game
  }
  async create(body) {
    const game = await dbContext.Games.create(body)
    return game
  }
  async update(id, body) {
    throw new Error("Method not implemented.");
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
