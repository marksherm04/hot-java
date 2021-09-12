const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: false,
            maxlength: 240
        },
        username: {
            type: String,
            required: true
        },
        createdAt:  {
            type: Date,
            default: Date.now,
            get: timeStamp => dateFormat(timeStamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = commentSchema;