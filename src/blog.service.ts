import {PostDto} from './blog.model'; //게시글의 타입 정보 임포트
import { Injectable } from '@nestjs/common';

//리포지토리 클래스와 인터페이스 임포트
import { BlogFileRepository, BlogRepository } from './blog.repository';

@Injectable()
export class BlogService{
    constructor(private blogRepository: BlogFileRepository){}

    async getAllPosts() {
        //모든 게시글 가져오기
        return await this.blogRepository.getAllPost();
    }

    createPost(postDto: PostDto){
        //게시글 작성
        this.blogRepository.createPost(postDto);
    }
    
    async getPost(id): Promise<PostDto> {
        //게시글 하나 가져오기
        return await this.blogRepository.getPost(id);
    }

    delete(id){
        //게시글 삭제
        this.blogRepository.deletePost(id);
    }

    updatePost(id, postDto: PostDto){
        //게시글 업데이트
        this.blogRepository.updatePost(id, postDto);
    }
}