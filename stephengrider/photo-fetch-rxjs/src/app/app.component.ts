import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wiki-search';
  wikiUrl="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space"
}
