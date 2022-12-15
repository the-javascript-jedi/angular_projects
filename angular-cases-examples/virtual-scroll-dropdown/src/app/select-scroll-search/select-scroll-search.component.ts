import {AfterViewInit, Component, ElementRef, OnInit, ViewChild,Renderer2,Input} from '@angular/core';
import {merge, fromEvent,concat,BehaviorSubject, Observable, Subscription} from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
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
  selector: 'app-select-scroll-search',
  templateUrl: './select-scroll-search.component.html',
  styleUrls: ['./select-scroll-search.component.scss']
})
export class SelectScrollSearchComponent implements OnInit,AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('indication', { static: true }) indication: ElementRef;
  @Input() apiEndpoint = '';
  @Output() selectedItemEvent = new EventEmitter<string>();

  responseData=[];
  displayDropdown=false;
  dropdownSelectedValue="";
  loadingDropdownApiData:boolean=false;
  dropdownValueFocus="";

  constructor(private _http:HttpClient,private _renderer: Renderer2) { 
    this._renderer.listen('window', 'click',(e:Event)=>{
      if( e.target!==this.searchInput.nativeElement){
            this.displayDropdown=false;
        }
    })
  }

  ngOnInit(): void {
    this.loadResponse().subscribe({
      next:(res)=>{
        this.responseData=res;
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
            switchMap(search=>this.loadResponse(search))
        )
        
        searchLessons$.subscribe({
      next:(res)=>{
        this.responseData=res;
      }
    })
    // scroll
     this.indication.nativeElement.addEventListener('scroll', () => {
    //  let listElement: HTMLElement
        console.log("scrolled"); 
        // console.log("listElement.scrollTop",this.indication.nativeElement.scrollTop); 
        // console.log("listElement.offsetHeight",this.indication.nativeElement.offsetHeight); 
        console.log("listElement.scrollTop + listElement.offsetHeight",this.indication.nativeElement.scrollTop + this.indication.nativeElement.offsetHeight); 
        console.log("listElement.scrollHeight",this.indication.nativeElement.scrollHeight); 
         if (((this.indication.nativeElement.scrollTop + this.indication.nativeElement.offsetHeight)) >= (this.indication.nativeElement.scrollHeight+17)) {
          console.log("listElement.make api call");
          // const searchGamesOnScroll$=fromEvent<any>(this.loadGames('',1).subscribe());
          console.log("this.responseData.length",this.responseData.length);
          this.loadingDropdownApiData=true;
          let calculatedPageSize=this.responseData.length+10;
          this.loadResponse(this.dropdownSelectedValue,calculatedPageSize).subscribe({
            next:(data)=>{
              this.responseData=data;
              this.loadingDropdownApiData=false;              
            },
            error:(err)=>{
              console.log("err",err);
              this.loadingDropdownApiData=false;              
            }
          });
         }
   })
  }

  clearSearchText(){
    this.dropdownSelectedValue="";
    this.indication.nativeElement.scrollTop = 0;
     this.loadResponse().subscribe({
      next:(res)=>{
        this.responseData=res;
      }
    })
  }
  inputSearchKeyUp(event){
    console.log("event",event)
    if(event.target.value!=''){
        this.indication.nativeElement.scrollTop = 0;
      }
  }
  focusSearchKeyUp(){
    this.indication.nativeElement.scrollTop = 0;
    this.displayDropdown=true;  
  }
  selectDropdownItem(value: string) {
    this.selectedItemEvent.emit(value);
  }

  // make api call
  loadResponse(search="",pageSize=10):Observable<any>{    
    console.log("api called")
        return this._http.get(`http://localhost:5000/api/${this.apiEndpoint}?&filter=${search}&pageSize=${pageSize}`).pipe(map(res=>res["responseDataFromAPI"]))
  }
  selectListItem(selectedItem){
    console.log("selectedItem",selectedItem);
    this.dropdownSelectedValue=selectedItem.description;
    this.selectDropdownItem(selectedItem.description);
    this.displayDropdown=false;
  }
}
