const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const voteSchema = require('./Votes');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema (
    {
        postText: {
            type: String,
            required: false,
            minlength: 1,
            maxlength: 240
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => dateFormat(timeStamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema],
        votes: [voteSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Post = model('Post', postSchema);

module.exports = Post;