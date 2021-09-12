const { Schema } = require('mongoose');
const postSchema = require('./Post');

const voteSchema = new Schema(
    {
       voteButton: {
            type: 'button',
            required: true
       },
       username: {
           type: String,
           required: true
       },
       postText: {
           required: true
       },
       posts: [postSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = voteSchema;