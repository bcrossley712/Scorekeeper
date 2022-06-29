import { Auth0Provider } from "@bcwdev/auth0provider";
import { handsService } from "../services/HandsService";
import BaseController from "../utils/BaseController";

export class HandsController extends BaseController {
  constructor() {
    super("api/hands");
    this.router
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete);
  }
  async getById(req, res, next) {
    try {
      const hand = await handsService.getById(req.params.id)
      return res.send(hand)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const hand = await handsService.create(req.body)
      return res.send(hand)
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const update = await handsService.update(req.body, req.params.id)
      return res.send(update)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const userId = req.userInfo.id
      const handId = req.params.id
      await handsService.delete(userId, handId)
      return res.send('Hand deleted')
    } catch (error) {
      next(error);
    }
  }
}
