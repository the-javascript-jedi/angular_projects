import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IPost } from 'src/interfaces/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:IPost[] = [];
  isFetching=false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    // Firebase
    // posts.json added for firebase
    // postData must be sent as JSON data
    //request must be binded using observable
    this.http.post<{name:string}>('https://ng-complete-guide-843b5-default-rtdb.firebaseio.com/posts.json',{
      postData
    }).subscribe(responseData=>{
      console.log("responseData",responseData);
    })
  }

  onFetchPosts() {
    // Send Http request
   this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.isFetching=true;
      this.http
     .get<{[key:string]:IPost}>('https://ng-complete-guide-843b5-default-rtdb.firebaseio.com/posts.json')
     // responseDataType - putting data in angled brackets is similar to adding in function body (responseData:{[key:string]:IPost})
     .pipe(map((responseData:{[key:string]:IPost})=>{
       console.log("responseData",responseData);
      //  loop through object and create an array
      const postsArray:IPost[]=[];
      for(const key in responseData){
        console.log("key")
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key],id:key})
        }
      }
      return postsArray;
     }))
     .subscribe(posts=>{
      console.log("posts",posts);
      this.loadedPosts=posts;
    })
     this.isFetching=false;
  }
}
