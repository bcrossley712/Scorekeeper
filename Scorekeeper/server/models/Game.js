import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const GameSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    scoring: { type: String },
    rules: { type: String },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' },
    bidding: { type: Boolean, default: false },
    lowScoreWins: { type: Boolean, default: false },
    highScore: { type: Number },
    bestPlayer: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GameSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
