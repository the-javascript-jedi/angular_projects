import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable() 
export class TableMergeApiService {
  constructor(private _http:HttpClient) { }
  loadUsers(id){
    return this._http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
   loadPosts(id){
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }  
}
