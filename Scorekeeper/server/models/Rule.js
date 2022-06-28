import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const RuleSchema = new Schema(
  {
    body: { type: String, required: true },
    sequence: { type: Number, required: true },
    gameId: { type: ObjectId, required: true, ref: 'Game' },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

RuleSchema.virtual('game', {
  localField: 'gameId',
  foreignField: '_id',
  justOne: true,
  ref: 'Game'
})

RuleSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
