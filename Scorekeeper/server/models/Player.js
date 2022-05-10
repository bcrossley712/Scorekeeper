import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const PlayerSchema = new Schema(
  {
    name: { type: String, required: true }
  })