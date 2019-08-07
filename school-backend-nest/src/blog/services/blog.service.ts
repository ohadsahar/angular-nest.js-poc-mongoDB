import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogModel } from '../models/blog.model';

@Injectable()
export class BlogService {
    constructor(@InjectModel('Blog') private readonly blogSchema: Model<BlogModel>) { }
    async findAll() {
        const result = await this.blogSchema.find().exec();
        return result.map(blog => ({
            id: blog.id,
            title: blog.title,
            content: blog.content,
        }));
    }
    async createBlog(title: string, content: string) {
        const newBlog = new this.blogSchema({ title, content });
        const result = await newBlog.save();
        const blog = {
            id: result._id,
            title: result.title,
            content: result.content,
        };
        return blog;
    }

    async updateBlog(id: string, title: string, content: string) {
        const data = { id, title, content };
        await this.blogSchema.findByIdAndUpdate({ _id: id }, data).exec();
        return data;
    }
    async delete(blogid: string) {
        return await this.blogSchema.deleteOne({ _id: blogid }).exec();
    }
}
