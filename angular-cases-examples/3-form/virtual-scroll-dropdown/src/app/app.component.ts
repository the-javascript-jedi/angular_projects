import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'virtual-scroll-dropdown';

  selectItemParent(selectedItem: string) {
    console.log("@Output--selectedItem",selectedItem)
  }
}
