const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth);

const resolvers = {
  Query: {
    me: async (parents, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts');
        
        return userData; 
      }
      throw new AuthenticationError('Not logged in');
    },
    // get all posts
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    // get single post by id
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('posts');
    },
    // get user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('posts');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Wrong email or password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    // add post

    // add comment
  }
};

module.exports = resolvers;