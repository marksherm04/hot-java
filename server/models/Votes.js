const { Schema } = require('mongoose');
const postSchema = require('./Post');

const voteSchema = new Schema(
    {
       voteButton: {
            type: Boolean,
            required: true
       },
       username: {
           type: String,
           required: true
       },
       postText: {
           type: String,
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