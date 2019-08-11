import * as mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});
