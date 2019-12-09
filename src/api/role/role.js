import mongoose, { Schema } from "mongoose"

const roleSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
    unique: true
  },
  users: [String]
})

roleSchema.pre("save", function(next) {
  const id = mongoose.Types.ObjectId().toString()
  this._id = id
  next()
})

export default mongoose.models.role || mongoose.model("Role", roleSchema)
