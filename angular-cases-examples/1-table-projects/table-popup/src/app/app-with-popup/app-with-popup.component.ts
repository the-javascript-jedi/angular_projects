import { Component } from '@angular/core';
import {dataFromApiTS_ii} from "../../data/dummyData_ii"

@Component({
  selector: 'app-app-with-popup',
  templateUrl: './app-with-popup.component.html',
  styleUrls: ['./app-with-popup.component.scss']
})
export class AppWithPopupComponent {
 dataFromAPIS:any; 
 ngOnInit(): void {
  this.dataFromAPIS=dataFromApiTS_ii.data_ii;
  console.log("this.dataFromAPIS",this.dataFromAPIS)
 }
}
