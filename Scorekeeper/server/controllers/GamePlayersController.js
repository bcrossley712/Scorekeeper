import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

class GamePlayersController extends BaseController {
  constructor() {
    super("api/games");
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete);
  }
  async getAll(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}
