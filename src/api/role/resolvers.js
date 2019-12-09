import roleDAO from './role'

export const roleResolvers = {
  Query: {
    roles() {
      const roles = roleDAO.find().exec()
      if (!roles) {
        throw new Error('Error')
      }
      return roles
    },
    role(obj, args) {
      const myRole = roleDAO.findOne({ name: { $eq: args.name } })
      if (!myRole) {
        throw new Error('Error')
      }
      return myRole
    }
  }
}
