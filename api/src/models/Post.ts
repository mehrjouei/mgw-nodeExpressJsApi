import { Schema, model } from 'mongoose';


let PostSchema: Schema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    required: true
  },
  slug: {
    type: String,
    default: '',
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    default: '',
    required: true
  },
  featuredImage: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  tags: { type: [String], index: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  published: {
    type: Boolean,
    default: false
  }
});

export default model('Post', PostSchema);