import { Component, Renderer2,ElementRef,ViewChild,OnInit,ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-search-custom',
  templateUrl: './search-custom.component.html',
  styleUrls: ['./search-custom.component.scss']
})
export class SearchCustomComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  @ViewChildren('attendee') attendeeInputs: QueryList<ElementRef>;

  constructor(private renderer: Renderer2){
     /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click',(e:Event)=>{
         /**
          * Only run when toggleButton is not clicked
          * If we don't check this, all clicks (even on the toggle button) gets into this
          * section which in the result we might never see the menu open!
          * And the menu itself is checked here, and it's where we check just outside of
          * the menu and button the condition abbove must close the menu
          */
        if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
            this.isMenuOpen=false;
        }
    });
  }

  isMenuOpen=false;
  selectedCategory = '';
  options = [
    { value: 'Small value 1', selected: false },
    { value: 'Medium large 1', selected: false },
    { value: 'Large value', selected: false },
  ];

  selectedUser: any;
  filterdOptions = this.options;
  filterUsers() {
    this.isMenuOpen=true;
    this.filterdOptions = this.options.filter((item) =>
      item.value.toLowerCase().includes(this.selectedUser.toLowerCase())
    );
    console.log(this.filterdOptions);
  }
selectValue(val){
    this.selectedUser=val;
    this.isMenuOpen=false;
}

  ngOnInit(): void {
    
  }

}
