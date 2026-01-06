// src/models/BlogPost.ts
import mongoose from 'mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title too long'],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  excerpt: {
    type: String,
    required: true,
    maxlength: [300, 'Excerpt too long'],
  },
  author: {
    type: String,
    default: 'Alex Johnson',
  },
  tags: {
    type: [String],
    default: [],
  },
  published: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

blogPostSchema.pre('save', function () {
  this.updatedAt = new Date();

  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;