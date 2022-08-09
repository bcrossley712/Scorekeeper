import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const HandSchema = new Schema(
  {
    bid: { type: Number, default: 0 },
    take: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    trump: { type: String },
    playerId: { type: ObjectId, required: true, ref: 'Player' },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' },
    sessionId: { type: ObjectId, required: true, ref: 'Session' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

HandSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

HandSchema.virtual('player', {
  localField: 'playerId',
  foreignField: '_id',
  justOne: true,
  ref: 'Player'
})