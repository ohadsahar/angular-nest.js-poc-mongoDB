import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogService } from './services/blog.service';

@Controller('posts')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }
    @Get()
    async findAll() {
        try {
            const resultAllBlogs = await this.blogService.findAll();
            return { message: resultAllBlogs, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Post()
    async createNewBlog(@Body() createBlogDto: CreateBlogDto) {
        try {
            const resultRegister = await this.blogService.createBlog(createBlogDto);
            return { message: resultRegister, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Put(':blogid')
    async update(@Param('blogid') blogid: string, @Body() updateBlogDto: UpdateBlogDto) {
        try {
            const resultUpdate = await this.blogService.updateBlog(updateBlogDto);
            return { message: resultUpdate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Delete(':blogid')
    async deleteBlog(@Param('blogid') blogid: string) {
        try {
            const resultDelete = await this.blogService.delete(blogid);
            return { message: resultDelete, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
