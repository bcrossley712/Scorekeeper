import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const GamePlayerSchema = new Schema(
  {
    playerId: { type: String, required: true, ref: 'Player' },
    sessionId: { type: String, required: true, ref: 'Session' },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GamePlayerSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
GamePlayerSchema.virtual('session', {
  localField: 'sessionId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
GamePlayerSchema.virtual('player', {
  localField: 'playerId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})