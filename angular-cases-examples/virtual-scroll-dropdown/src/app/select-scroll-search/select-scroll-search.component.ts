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
  @ViewChild('searchBox', { static: true }) searchBox: ElementRef;
  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef;
  @Input() apiEndpoint = '';
  @Input() defaultDropdownValue = '';
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
            if(this.dropdownSelectedValue==''&&this.dropdownValueFocus!==''){
              this.dropdownSelectedValue=this.dropdownValueFocus;
            }
        }
    })
  }

  ngOnInit(): void {
    this.loadResponse().subscribe({
      next:(res)=>{
        console.log("1 ngOninit called");
        this.responseData=res;
      }
    })
    this.dropdownValueFocus=this.defaultDropdownValue;
  }

  ngAfterViewInit() {
    //distinctUntilChanged() - If two consecutive values are exactly the same, we only want to emit one value and we can get that functionality using the distinct until changed operator with this operator, we no longer will have duplicate values in our output.
        //switchMap()-switch map is going to unsubscribe from the search that was still ongoing when we type new value.That is an outdated search and the Http  request is going to be canceled. 
        const searchDropdownData$=fromEvent<any>(this.searchInput.nativeElement,'keyup').pipe(
            map(event=>event.target.value),
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(search=>this.loadResponse(search))
        )
        
        searchDropdownData$.subscribe({
      next:(res)=>{
        this.responseData=res;
      }
    })
    // scroll
     this.scrollContainer.nativeElement.addEventListener('scroll', () => {
    //  let listElement: HTMLElement
        console.log("scrolled"); 
        // console.log("listElement.scrollTop",this.indication.nativeElement.scrollTop); 
        // console.log("listElement.offsetHeight",this.indication.nativeElement.offsetHeight); 
        console.log("listElement.scrollTop + listElement.offsetHeight",this.scrollContainer.nativeElement.scrollTop + this.scrollContainer.nativeElement.offsetHeight); 
        console.log("listElement.scrollHeight",this.scrollContainer.nativeElement.scrollHeight); 
         if (((this.scrollContainer.nativeElement.scrollTop + this.scrollContainer.nativeElement.offsetHeight)) >= (this.scrollContainer.nativeElement.scrollHeight+17)) {
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
    this.dropdownValueFocus='';
    this.dropdownValueFocus=this.defaultDropdownValue;
    this.scrollContainer.nativeElement.scrollTop = 0;
     this.loadResponse().subscribe({
      next:(res)=>{
        console.log("2 clearSearchText called");
        this.responseData=res;
      }
    })
  }
  inputSearchKeyUp(event){
    console.log("event",event)
    if(event.target.value!=''){
        this.scrollContainer.nativeElement.scrollTop = 0;
      }
  }
  focusSearchKeyUp(){
    this.scrollContainer.nativeElement.scrollTop = 0;
    this.displayDropdown=true;  
    if(this.dropdownSelectedValue!=''){
      this.dropdownValueFocus=this.dropdownSelectedValue;
    }
    this.dropdownSelectedValue='';
    this.loadResponse().subscribe({
      next:(res)=>{
        console.log("3 focusSearchKeyUp called");
        this.responseData=res;
      }
    })
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
    if(selectedItem===this.defaultDropdownValue){
      this.dropdownSelectedValue=this.defaultDropdownValue;
      this.selectDropdownItem(this.defaultDropdownValue);
    }else{
      this.dropdownSelectedValue=selectedItem.description;
      this.selectDropdownItem(selectedItem.description);
    }
    this.displayDropdown=false;
  }
}
