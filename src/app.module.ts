import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';

@Module({
  imports: [
    //몽고디비 연결 설정
    MongooseModule.forRoot(
      'mongodb+srv://chocoyujung7:yujung7!@cluster0.ykh8yfz.mongodb.net/blog',
    ),
    //몽고디비 스키마 설정
    MongooseModule.forFeature([{name: Blog.name, schema: BlogSchema}]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository], //프로바이더 설정
})
export class AppModule {}
