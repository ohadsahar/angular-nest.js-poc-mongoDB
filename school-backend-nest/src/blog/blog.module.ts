import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { blogSchema } from './models/blog.model';
import { BlogService } from './services/blog.service';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Blog', schema: blogSchema},
    ])],
    controllers: [BlogController],
    providers: [BlogService],
})

export class BlogModule {
}
