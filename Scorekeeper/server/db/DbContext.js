import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GameSchema } from "../models/Game";
import { HandSchema } from "../models/Hand";
import { PlayerSchema } from "../models/Player";
import { SessionSchema } from "../models/Session";
import { ValueSchema } from '../models/Value'

class DbContext {
  Games = mongoose.model('Game', GameSchema);
  Sessions = mongoose.model('Session', SessionSchema);
  Players = mongoose.model('Player', PlayerSchema);
  Hands = mongoose.model('Hand', HandSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
