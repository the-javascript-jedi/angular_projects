import { Component, OnInit,HostListener  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  isCollapsed = true;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    // clickedElement.closest('.sidenav') - checks if the clicked element or any of its ancestors has a class of "sidenav." The closest method looks up the DOM tree starting from the current element and returns the first ancestor that matches the specified selector.
    // Check if the clicked element is not within the sidenav
    if (!this.isCollapsed && !clickedElement.closest('.sidenav')) {
      this.isCollapsed = true;
    }
  }

  toggleCollapse() {
    console.log("clicked")
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
  }

}
