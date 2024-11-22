import { Component } from '@angular/core';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  standalone:true,
  imports:[FeedComponent]
})
export class GlobalFeedComponent {

}
