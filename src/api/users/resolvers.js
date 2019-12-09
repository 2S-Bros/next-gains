import userDAO from './users'

export const usersResolvers = {
  Query: {
    users() {
      console.log('wa boop boop')
      const users = userDAO.find().exec()
      if (!users) {
        throw new Error('Error')
      }
      return users
    },
    user(_, args) {
      console.log('argggg')
      const myUser = userDAO.findOne({ username: { $eq: args.username } })
      if (!myUser) {
        throw new Error('Error')
      }
      return myUser
    },
    me(_, __, { userId }) {
      console.log('meee')
      if (!userId) {
        throw new Error('You are not authenticated')
      }

      return userDAO.findById(userId)
    },
    getTheme(_, __, { userId }) {
      const user = userDAO.findOne({ _id: { $eq: userId } })
      return user.theme || 'light'
    }
  }
}
