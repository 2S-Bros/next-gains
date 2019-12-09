import mongoose, { Schema } from "mongoose"

const exerciseSchema = new Schema({
  _id: String,
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

exerciseSchema.pre("save", function(next) {
  const id = mongoose.Types.ObjectId().toString()
  this._id = id
  next()
})

export default mongoose.models.exercises ||
  mongoose.model("Exercise", exerciseSchema)
