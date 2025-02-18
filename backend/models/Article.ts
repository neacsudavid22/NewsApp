//Creating a schema and model
import mongoose from 'mongoose';
const { Schema, SchemaTypes, model } = mongoose;

const Article = model('Article', new Schema({
  title:  {
    type: String,
    required: [true, "Title is required"],
    unique: true,
    minlength: [10, 'Title must be at least 10 characters long']
  },
  author: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: [true, "Author is required"],
    minlength: 3
  },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  articleContent: [{
    content: String,
    contentType: {
      type: String,
      enum: ['p', 'h2', 'imgUrl', 'galleryUrl'], // others to come
      default: 'p'
    }
  }]
}));

export default Article;