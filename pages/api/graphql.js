import { ApolloServer } from "apollo-server-micro"
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit"
import connectDb from "../../lib/mongoose"
import { exercisesResolvers } from "../../src/api/exercises/resolvers"
import { exercisesMutations } from "../../src/api/exercises/mutations"
import { usersResolvers } from "../../src/api/users/resolvers"
import { usersMutations } from "../../src/api/users/mutations"
import { roleResolvers } from "../../src/api/role/resolvers"
import { roleMutations } from "../../src/api/role/mutations"
import Users from "../../src/api/users/Users.graphql"
import Exercises from "../../src/api/exercises/Exercises.graphql"
import Role from "../../src/api/role/Role.graphql"

const resolvers = mergeResolvers([
  commonResolvers,
  usersResolvers,
  usersMutations,
  roleResolvers,
  roleMutations,
  exercisesResolvers,
  exercisesMutations
])

const typeDefs = mergeTypeDefs([Exercises, Users, Role])

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

const server = apolloServer.createHandler({ path: "/api/graphql" })
export default connectDb(server)
