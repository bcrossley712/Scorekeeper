import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const GameSchema = new Schema(
  {
    body: { type: String, required: true },
    sequence: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)


