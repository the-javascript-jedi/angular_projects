import {Component, OnInit} from '@angular/core';
import { LoadingService } from './loading/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // instance of loading service in providers means the instance is visible only to application and its child component
  providers:[LoadingService]
})
export class AppComponent implements  OnInit {
    constructor() { }
    ngOnInit() { }
    logout() { }
}