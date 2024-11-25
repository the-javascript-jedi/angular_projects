import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/action';
import { combineLatest, map } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducer';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingComponent } from '../loading/loading.component';
import { environment } from 'src/environments/environment';
import { PaginationComponent } from '../pagination/pagination.component';
import queryString from 'query-string'
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
    standalone: true,
  imports: [CommonModule, RouterLink,ErrorMessageComponent,LoadingComponent,PaginationComponent,TagListComponent],
})
export class FeedComponent {
  @Input() apiUrl:string="";

  data$=combineLatest({
    isLoading:this.store.select(selectIsLoading),
    error:this.store.select(selectError),
    // feed:this.store.select(selectFeedData),
    feed:this.store.select(selectFeedData).pipe(
    map(feed => {
      console.log("feed--component.ts",feed);
      if (!feed) {
        // Handle case when feed is null or undefined
        return null;
      }
      return {
      ...feed,
      // modify the state inside component using pipe
      articlesCount: feed.articlesCount ? feed.articlesCount * 2 : 0, // Multiply articlesCount by 10
    }
    })
  ),
  })
  limit=environment.limit;
  baseUrl=this.router.url.split('?')[0];
  currentPage:number=0;

  constructor(private store:Store,private router:Router,private route:ActivatedRoute){}

  ngOnInit():void{
    this.store.dispatch(feedActions.getFeed({url:this.apiUrl}));

    this.route.queryParams.subscribe((params:Params)=>{
      this.currentPage=Number(params['page']||'1');
      this.fetchFeed();
    })
  }

  fetchFeed():void{
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrl)
    // stringify the params to send api request
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(feedActions.getFeed({url: apiUrlWithParams}))
  }
}
