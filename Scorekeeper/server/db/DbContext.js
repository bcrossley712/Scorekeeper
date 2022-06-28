import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GameSchema } from "../models/Game";
import { PlayerSchema } from "../models/Player";
import { RuleSchema } from "../models/Rule";
import { SessionSchema } from "../models/Session";
import { ValueSchema } from '../models/Value'

class DbContext {
  Sessions = mongoose.model('Session', SessionSchema);
  Players = mongoose.model('Player', PlayerSchema);
  Games = mongoose.model('Game', GameSchema);
  Rules = mongoose.model('Rule', RuleSchema);
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
