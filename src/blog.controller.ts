//데코레이터 함수 임포트
import {Controller, Param, Body, Delete, Get, Post, Put} from '@nestjs/common';
import { BlogService } from './blog.service'; //블로그 서비스 임포트

@Controller('blog')//클래스에 붙이는 Controller 데코레이터
export class BlogController {
    constructor(private blogService: BlogService){} //BlogService 주입

    @Get() //GET 요청 처리
    getAllPosts(){
        console.log('모든 게시글 가져오기');
        return this.blogService.getAllPosts();
    }

    @Post() //Post 요청 처리
    createPost(@Body() postDto){
        //HTTP 요청의 body 내용을 post에 할당
        console.log('게시글 작성');
        this.blogService.createPost(postDto);
        return 'success';
    }

    @Get('/:id') 
    //비동기를 지원하는 메서드로 시그니처 변경
    async getPost(@Param('id') id: string){
        console.log('게시글 하나 가져오기');

        //블로그 서비스에서 사용하는 메서드가 비동기로 변경되었으므로 await 사용
        const post = await this.blogService.getPost(id);
        console.log(post);
        return post;
    }

    @Delete('/:id') //DELETE 방식에 url 매개변수로 id가 있는 요청 처리
    deletePost(@Param('id') id:string) {
        console.log('게시글 삭제');
        this.blogService.delete(id);
        return 'success';
    }

    @Put('/:id') //PUT 방식에 url 매개변수로 전달된 id가 있는 요청 처리
    updatePost(@Param('id') id: string, @Body() postDto){
        console.log('게시글 업데이트', id, postDto);
        return this.blogService.updatePost(id, postDto);
    }
}