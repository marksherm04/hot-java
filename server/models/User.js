const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        votes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Votes'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

//Middleware Pre-Save to Create Password
userSchema.pre('save', async function (password) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    password();
});

//Validate Incoming Password with Hashed Password
userSchema.methods.isCorrectPassword = async function (correct) {
    return bcrypt.compare(correct, this.password);
};

const User = model('User', userSchema);

module.exports = User;