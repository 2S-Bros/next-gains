import mongoose, { Schema } from "mongoose"

const exerciseSchema = new Schema({
  authorId: String,
  canEdit: Boolean,
  createdAt: Date,
  description: String,
  intensity: Number,
  isPremium: Boolean,
  categories: [String],
  name: String,
  updatedAt: Date
  // TODO: add workouts
})

export default mongoose.models.exercises ||
  mongoose.model("Exercise", exerciseSchema)
