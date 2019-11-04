import mongoose, { Schema } from "mongoose"

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  users: [String]
})

export default mongoose.models.role || mongoose.model("Role", roleSchema)
