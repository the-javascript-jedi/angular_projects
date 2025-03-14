import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // API 1: Load a specific user by postId
  loadUsers(postId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${postId}`);
  }

  // API 2: Load posts for a user based on their ID
  loadPosts(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts?userId=${userId}`);
  }
}
