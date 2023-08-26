import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log("app-vision--ngOnDestroy"); 
  }
}
