import { Auth0Provider } from "@bcwdev/auth0provider";
import { playersService } from "../services/PlayersService";
import { sessionsService } from "../services/SessionsService";
import BaseController from "../utils/BaseController";

export class SessionsController extends BaseController {
  constructor() {
    super("api/sessions");
    this.router
      .get('/:id/players', this.getSessionsPlayers)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete);
  }
  async getSessionsPlayers(req, res, next) {
    try {
      const sessionId = req.params.id
      const players = await playersService.getSessionsPlayers(sessionId)
      return res.send(players)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      const session = await sessionsService.getById(req.params.id)
      return res.send(session)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const session = await sessionsService.create(req.body)
      return res.send(session)
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const update = await sessionsService.update(req.params.id, req.body)
      return res.send(update)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const userId = req.userInfo.id
      await sessionsService.delete(userId, req.params.id)
      return res.send('Session Deleted')
    } catch (error) {
      next(error);
    }
  }
}

