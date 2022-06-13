import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-custom-tabs';
  // on load apply active tab
  id:any="mission";
  // apply active tab based on click
  tabChange(idClicked:string){
    console.log("idClicked",idClicked);
    this.id=idClicked;
  }
}
