import * as mongoose from 'mongoose';

export const blogSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
});

export class BlogModel {
  id: string;
  title: string;
  content: string;
}
