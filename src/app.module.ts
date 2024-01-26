import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository } from './blog.repository';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository], //프로바이더 설정
})
export class AppModule {}
