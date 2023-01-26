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
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent implements OnInit {
  showMenu:boolean=false;
  loadingApiData:boolean=true;
  @Input() apiEndpoint=""

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('filterContainer', { static: true }) filterContainer: ElementRef;
  selectedElementPlaceHolder:string="All";
  selectedElementCopy:string="All";
  constructor(private _http:HttpClient,private _renderer: Renderer2) { 
    this._renderer.listen('window', 'click',(e:Event)=>{
      // console.log("e.target",e.target)
      // if(e.target!==this.searchBox.nativeElement||e.target!==this.searchScrollEntirePlaceholder.nativeElement){
        if(e.target !== this.searchInput.nativeElement){
          this.showMenu=false;
          this.selectedElementPlaceHolder=this.selectedElementCopy;
          this.searchInput.nativeElement.value="";   
      }
    })
  }
  menuData=[];
  ngOnInit(): void {
    // this.loadDropdownData();
  }

  loadDropdownData(){
    this.loadingApiData=true;
    this.menuData=[];
    this.loadGames().subscribe({
      next:(res)=>{
        this.menuData=res;
        this.loadingApiData=false;
      },
      error:(res)=>{
        this.loadingApiData=false;
      }
    })
  }
  onFocusInput(){
    this.searchInput.nativeElement.value="";
    this.showMenu=true;
    this.selectedElementPlaceHolder="";
    this.loadDropdownData();
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
    this.selectedElementPlaceHolder=selectedElement.description;
    this.selectedElementCopy=selectedElement.description;
  }
}
