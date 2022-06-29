import { Auth0Provider } from "@bcwdev/auth0provider";
import { gamesService } from "../services/GamesService";
import { sessionsService } from "../services/SessionsService";
import BaseController from "../utils/BaseController";

export class GamesController extends BaseController {
  constructor() {
    super("api/games")
    this.router
      .get('/:id/sessions', this.getGamesSessions)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }
  async getGamesSessions(req, res, next) {
    try {
      const sessions = await sessionsService.getGamesSessions(req.params.id)
      return res.send(sessions)
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const games = await gamesService.getAll()
      return res.send(games)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      const game = await gamesService.getById(req.params.id)
      return res.send(game)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const game = await gamesService.create(req.body)
      return res.send(game)
    } catch (error) {
      next(error)
    }
  }
  async update(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const update = await gamesService.update(req.params.id, req.body)
      return res.send(update)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      const userId = req.userInfo.id
      await gamesService.delete(req.params.id, userId)
      return res.send('Game Deleted')
    } catch (error) {
      next(error)
    }
  }
}
