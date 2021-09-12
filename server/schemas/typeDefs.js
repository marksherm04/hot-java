const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID
    postText: string
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    postCount: Int
    comments: [Comment]
  }

  type Query {
    me: User
    user: [User]
    user:(username: String!): User
    posts(username: String): [Post]
    comment(_id: ID!): Comment
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;