import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const PlayerSchema = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' },
    img: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlayerSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
