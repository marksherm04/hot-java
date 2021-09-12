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

    // get single post by id

    // get all users

    // get user by username
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // login

    // add post

    // add comment
  }
};

module.exports = resolvers;