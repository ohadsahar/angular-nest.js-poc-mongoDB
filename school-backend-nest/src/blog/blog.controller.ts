import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogService } from './services/blog.service';

@Controller('posts')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }
    @Get()
    async findAll() {
        return await this.blogService.findAll();
    }
    @Post()
    async createNewBlog(@Body() createBlogDto: CreateBlogDto) {
        return await this.blogService.createBlog(createBlogDto);
    }
    @Put(':blogid')
    async update(@Param('blogid') blogid: string, @Body() updateBlogDto: UpdateBlogDto) {
        return await this.blogService.updateBlog(updateBlogDto);
    }
    @Delete(':blogid')
    async deleteBlog(@Param('blogid') blogid: string) {
        return await this.blogService.delete(blogid);
    }
}
