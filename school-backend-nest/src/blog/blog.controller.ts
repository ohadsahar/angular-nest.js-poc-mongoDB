import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './services/blog.service';

@Controller('posts')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }
    @Get()
    async findAll() {
        return await this.blogService.findAll();
    }
    @Post()
    async createNewBlog(@Body('title') title: string, @Body('content') content: string) {
        return await this.blogService.createBlog(title, content);
    }
    @Delete(':blogid')
    async deleteBlog(@Param('blogid') blogid: string) {
        return await this.blogService.delete(blogid);
    }
}
