import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/action';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducer';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
    standalone: true,
  imports: [CommonModule, RouterLink,ErrorMessageComponent,LoadingComponent],
})
export class FeedComponent {
  @Input() apiUrl:string="";

  data$=combineLatest({
    isLoading:this.store.select(selectIsLoading),
    error:this.store.select(selectError),
    feed:this.store.select(selectFeedData),
  })

  constructor(private store:Store){}

  ngOnInit():void{
    this.store.dispatch(feedActions.getFeed({url:this.apiUrl}))
  }
}
