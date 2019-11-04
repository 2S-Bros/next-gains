import Role from "./role"

export const roleMutations = {
  Mutation: {
    createRole: async (_, args) => {
      try {
        const res = await role.create({ name: args.name })
        return true
      } catch (e) {
        throw new Error("Error creating account")
      }
    }
  }
}
