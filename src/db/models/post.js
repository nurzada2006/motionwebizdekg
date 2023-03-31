import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: false,
    default: 0,
  },
  isPaid: {
    type: Boolean,
    required: false,
    default: false,
  },
  hashtags: {
    type: [String],
  }
}, { timestamps: true, strict: false });

module.exports = {
  Post,
}
