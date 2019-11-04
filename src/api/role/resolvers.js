import roleDAO from "./role"

export const exercisesResolvers = {
  Query: {
    roles() {
      const roles = roleDAO.find().exec()
      if (!roles) {
        throw new Error("Error")
      }
      return roles
    },
    user(obj, args) {
      const myRole = roleDAO.findOne({ name: { $eq: args.name } })
      if (!myRole) {
        throw new Error("Error")
      }
      return myRole
    }
  }
}
