import { Auth0Provider } from "@bcwdev/auth0provider";
import { handsService } from "../services/HandsService";
import { playersService } from "../services/PlayersService";
import BaseController from "../utils/BaseController";

export class PlayersController extends BaseController {
  constructor() {
    super("api/gamePlayers")
    this.router
      .get('/:id/hands', this.getPlayersHands)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }
  async getPlayersHands(req, res, next) {
    try {
      const playerId = req.params.id
      const hands = await handsService.getPlayersHands(playerId)
      return res.send(hands)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const player = await playersService.getById(req.params.id)
      return res.send(player)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const player = await playersService.create(req.body)
      return res.send(player)
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const update = await playersService.update(req.body, req.params.id)
      return res.send(update)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const userId = req.userInfo.id
      const playerId = req.params.id
      await playersService.delete(userId, playerId)
      return res.send("Player deleted")
    } catch (error) {
      next(error);
    }
  }
}
