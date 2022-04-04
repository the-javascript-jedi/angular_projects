import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from 'src/interfaces/post.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  // POST request
  createAndStore(title:string,content:string){
    const postData:IPost={title:title,content:content}
    console.log("postData",postData);
     // Send Http request
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
  // GET Request
  fetchPosts(){
    // returns as an observable
    return this.http
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
  }

  // DELETE Posts
  deletePosts(){
    return this.http.delete('https://ng-complete-guide-843b5-default-rtdb.firebaseio.com/posts.json')
  }
}
