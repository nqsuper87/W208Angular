import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable()
export class PostService {

  urlPost = environment.url + "/posts";

  constructor(private httpService: HttpClient) { }

  getAllPosts(){
    return this.httpService.get(this.urlPost);
  }

  createPost(dataPost){
    this.httpService.post(this.urlPost,dataPost).subscribe(data =>{
      console.log("Created Post Success");
    });
  }

}
