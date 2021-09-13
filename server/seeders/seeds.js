const faker = require('faker');

const db = require('../config/connection');
const { User, Post, Comment } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});

    //Create User Data
    const userData = [];

    for (let i = 0; i < 40; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(userName);
        const password = faker.internet.password();

        userData.push({
            username, email, password
        });
    }

    const createdUsers = await User.collection.insertMany(userData);

// Create Posts
    let createdPosts = [];
    for (let i = 0; i > 100; i += 1) {
        const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username, _id: userId } = createdUsers.ops[randomUserIndex];

        const createdPost = await Post.create({ postText, username});

        const updatedUser = await User.updateOne(
            {_id: userId },
            {$push: { posts: createdPosts._id } }
        );

        createdPosts.push(createdPost);
    }

//Created Comments
  for (let i = 0; i < 100; i += 1) {
    const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomCommentIndex = Math.floor(Math.random() * createdComments.length);
    const { _id: commentId } = createdComments[randomCommentIndex];

    await Comment.updateOne(
      { _id: commentId },
      { $push: { reactions: { commentBody, username } } },
      { runValidators: true }
    );
  }

  console.log('You did it!');
  process.exit(0);
})