import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
  cards: [String],
  decks: [String],
  displayName: String,
  password: { type: String, required: true },
  roles: [String],
  username: { type: String, required: true, unique: true },
  theme: String
})

userSchema.index({ username: 1 })

export default mongoose.models.users || mongoose.model("users", userSchema)
