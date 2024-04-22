import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-nav',
  templateUrl: './scroll-nav.component.html',
  styleUrls: ['./scroll-nav.component.scss']
})
export class ScrollNavComponent implements OnInit {

  constructor() { }
  @ViewChild('navHead') navHeadRef!: ElementRef;
  ngOnInit(): void {
  }
  showPrevButton = false;
  showNextButton = true;
  navItems=[
    {"id":1,navHead:"Box 1"},
    {"id":2,navHead:"Box 2"},
    {"id":3,navHead:"Box 3"},
    {"id":4,navHead:"Box 4"},
    {"id":5,navHead:"Box 5"},
    {"id":6,navHead:"Box 6"},
    {"id":7,navHead:"Box 7"},
    {"id":8,navHead:"Box 8"},
    {"id":9,navHead:"Box 9"},
    {"id":10,navHead:"Box 10"},
    {"id":11,navHead:"Box 11"},
    {"id":12,navHead:"Box 12"},
    {"id":13,navHead:"Box 13"},
    {"id":14,navHead:"Box 14"},
    {"id":15,navHead:"Box 15"},
    {"id":16,navHead:"Box 16"},
  ]

   prevClick() {
    // Scroll to the left by a certain amount
    this.navHeadRef.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  nextClick() {
    // Scroll to the right by a certain amount
    this.navHeadRef.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  onScroll() {
    const navHeadElement = this.navHeadRef.nativeElement;
    console.log("navHeadElement.scrollLeft",navHeadElement.scrollLeft)
    console.log("navHeadElement.clientWidth",navHeadElement.clientWidth)
    console.log("navHeadElement.scrollWidth",navHeadElement.scrollWidth)
    console.log("navHeadElement.scrollLeft + navHeadElement.clientWidth",navHeadElement.scrollLeft + navHeadElement.clientWidth)
    this.showPrevButton = navHeadElement.scrollLeft > 0;
    this.showNextButton = (navHeadElement.scrollLeft + navHeadElement.clientWidth) < navHeadElement.scrollWidth-50;
  }
}
