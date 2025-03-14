import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
userTableData$!: Observable<any>;

  constructor(private _mergeApiService: ApiService) {}

 loadTableData(postId: number): void {
  this.userTableData$ = this._mergeApiService.loadUsers(postId).pipe(
    concatMap((userResponse) => {
      console.log('userResponse:', userResponse);

      // Using API 1's result to call API 2
      return this._mergeApiService.loadPosts(userResponse['id']).pipe(
        map((val) => {
          console.log('val:', val);

          // Modify the result if needed; ensure it's an array
          return val.map((item: any) => ({
            id: item.id,
            title: item.title,
          }));
        })
      );
    })
  );
}
}
