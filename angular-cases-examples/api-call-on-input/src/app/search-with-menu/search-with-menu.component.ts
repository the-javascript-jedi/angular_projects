import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {merge, fromEvent, Observable, concat} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    startWith,
    tap,
    delay,
    map,
    concatMap,
    switchMap,
    withLatestFrom,
    concatAll, shareReplay
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-with-menu',
  templateUrl: './search-with-menu.component.html',
  styleUrls: ['./search-with-menu.component.scss']
})
export class SearchWithMenuComponent implements OnInit {
  showMenu:boolean=false;
  loadingApiData:boolean=true;
  @Input() apiEndpoint=""

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('filterContainer', { static: true }) filterContainer: ElementRef;
  @ViewChild('toggleButton') toggleButton: ElementRef;


  selectedElementDisplay:string="All";
  selectedElementCopy:string="All";
  constructor(private _http:HttpClient,private _renderer: Renderer2) { 
    this._renderer.listen('window', 'click',(e:Event)=>{
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
    //  if(e.target !== this.toggleButton.nativeElement && e.target!==this.filterContainer.nativeElement){
    //      this.showMenu=false;
    //  }
    if(e.target !== this.toggleButton.nativeElement && e.target !== this.filterContainer.nativeElement && !this.filterContainer.nativeElement.contains(e.target)){
      this.showMenu=false;
      this.selectedElementDisplay=this.selectedElementCopy;
    }

 });
  }
  menuData=[];
  ngOnInit(): void {
    // this.loadDropdownData();
  }
  toggleMenuFn(){
    console.log("toggleMenuFn called")
    this.showMenu=!this.showMenu;
    if(this.showMenu===true){
      this.searchInput.nativeElement.value="";    
      this.selectedElementDisplay="";
      this.loadDropdownData();      
    }
  }

  loadDropdownData(){
    this.loadingApiData=true;
    this.menuData=[];
    this.loadGames().subscribe({
      next:(res)=>{
        this.menuData=res;
        this.loadingApiData=false;
        setTimeout(()=>{this.searchInput.nativeElement.focus()});
      },
      error:(res)=>{
        this.loadingApiData=false;
      }
    })

  }
  ngAfterViewInit() {
    //distinctUntilChanged() - If two consecutive values are exactly the same, we only want to emit one value and we can get that functionality using the distinct until changed operator with this operator, we no longer will have duplicate values in our output.
        //switchMap()-switch map is going to unsubscribe from the search that was still ongoing when we type new value.That is an outdated search and the Http  request is going to be canceled. 
        const searchLessons$=fromEvent<any>(this.searchInput.nativeElement,'keyup').pipe(
            map(event=>event.target.value),
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(search=>this.loadGames(search))
        )
        
        searchLessons$.subscribe({
      next:(res)=>{
        this.menuData=res;
      }
    })
  }
  loadGames(search=""):Observable<any>{
        return this._http.get(`http://localhost:5000/api/${this.apiEndpoint}?&filter=${search}`).pipe(map(res=>res["gamesData"]))
  }
  selectData(selectedElement){
    this.searchInput.nativeElement.value="";
    console.log("selectedElement",selectedElement);
    this.selectedElementDisplay=selectedElement.description;
    this.selectedElementCopy=selectedElement.description;
    this.showMenu=false;
  }

}
