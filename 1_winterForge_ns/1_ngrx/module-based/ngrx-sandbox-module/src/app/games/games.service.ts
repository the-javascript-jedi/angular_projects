import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) {}

  fetchGames(pageNumber: number, pageSize: number) {
    return this.http
      .get<any>(
        `http://localhost:5000/api/searchTableWithPagination?pageNumber=${pageNumber}&pageSize=${pageSize}`
      )
      .pipe(map((res) => res.gamesPage));
  }
}
