import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const PlayerSchema = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' },
    sessionId: { type: ObjectId, required: true, ref: 'Session' },
    picture: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlayerSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
PlayerSchema.virtual('session', {
  localField: 'sessionId',
  foreignField: '_id',
  justOne: true,
  ref: 'Session'
})
