const mongoose = require('mongoose');

const models = require('./models');

mongoose.connect('mongodb://localhost:27017/motionweb').then(() => {
  console.log('connected');
});

module.exports = {
  Post: mongoose.model('posts', models.Post),
  // Agent: mongoose.model('users', models.User),
}

