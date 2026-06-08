import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Game, GamePlatform } from './store/games.state';

interface GamesPageResponse {
  gamesPage: Game[];
}

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(private http: HttpClient) {}

  fetchGames(pageNumber: number, pageSize: number) {
    return this.http
      .get<GamesPageResponse>(
        `http://localhost:5000/api/searchTableWithPagination?pageNumber=${pageNumber}&pageSize=${pageSize}`
      )
      .pipe(map((res) => res.gamesPage));
  }

  fetchGamePlatform() {
    return this.http.get<GamePlatform>(
      `http://localhost:5000/api/gamePlatform`
    );
  }
}
