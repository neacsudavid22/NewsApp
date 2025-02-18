//Creating a schema and model
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const Article = model('Article', new Schema({
  title:  {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  content: {
    order: { type: [String], required: true }, // the name of the elements in order to know which one is next, they are accessed sequentially
    paragraphs: [String],
    headers: [String],
    galery: [{
      imageUrl: String,
      title: String,
      }],
      // to-do: add comments
  }
}, { timestamps: true }));
export default Article;
