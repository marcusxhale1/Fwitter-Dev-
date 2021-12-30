const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// User can create many posts 
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// Post was created by X = User 
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

// User belongs to many Fweets (post.js), and Fweets(post.js) belong to many Users
User.belongsToMany(Post, {
    through: Vote,
    as: 'liked_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'liked-posts',
    foreignKey: 'post_id'
  });

  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });
  

module.exports = { User, Post, Vote };