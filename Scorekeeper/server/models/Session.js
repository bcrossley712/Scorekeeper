import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const SessionSchema = new Schema(
  {
    gameId: { type: String, required: true, ref: 'Game' },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

SessionSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

SessionSchema.virtual('game', {
  localField: 'gameId',
  foreignField: '_id',
  justOne: true,
  ref: 'Game'
})