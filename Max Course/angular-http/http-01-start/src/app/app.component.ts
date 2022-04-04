import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from 'src/interfaces/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:IPost[] = [];
  isFetching=false;
  error=null;
  constructor(private http: HttpClient,private postsService:PostsService) {}

  ngOnInit() {    
    this.isFetching=true;
    // Make API request
    this.postsService.fetchPosts().subscribe((posts)=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStore(postData.title,postData.content);   
  }

  onFetchPosts() {
     this.isFetching=true;
    // Make API request
    this.postsService.fetchPosts().subscribe((posts)=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    },error=>{
      console.log("error",error)
      this.error=error.message;
    })
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(()=>{
      //this code block only executes if delete request is successful
      this.loadedPosts=[];
    })
  }
}
