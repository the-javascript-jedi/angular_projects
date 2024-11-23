import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  standalone:true,
  imports:[FeedComponent,BannerComponent,ErrorMessageComponent]
})
export class GlobalFeedComponent {
  apiUrl="/articles"
}
