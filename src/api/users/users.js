import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
  _id: String,
  cards: [String],
  decks: [String],
  displayName: String,
  password: { type: String, required: true },
  roles: [String],
  username: { type: String, required: true, unique: true },
  theme: String
})

userSchema.pre("save", function(next) {
  const id = mongoose.Types.ObjectId().toString()
  this._id = id
  next()
})

userSchema.index({ username: 1 })

export default mongoose.models.User || mongoose.model("User", userSchema)
