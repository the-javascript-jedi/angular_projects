import {AfterViewInit, Component, ElementRef, OnInit, ViewChild,Renderer2,Input} from '@angular/core';
import {merge, fromEvent,concat,BehaviorSubject, Observable, Subscription, Subject} from 'rxjs';
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
  concatAll, shareReplay, takeUntil
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-scroll-search-ii',
  templateUrl: './select-scroll-search-ii.component.html',
  styleUrls: ['./select-scroll-search-ii.component.scss']
})
export class SelectScrollSearchIiComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef;
  @ViewChild('toggleButtonInput') toggleButtonInput: ElementRef;
  @ViewChild('menu') menu: ElementRef;  @Input() apiEndpoint = '';
  @Input() defaultDropdownValue = '';
  @Output() selectedItemEvent = new EventEmitter<string>();
  scrollSubscription:Subscription;
  loadingData:boolean=true;

  responseData=[];
  displayDropdown=false;
  dropdownSelectedValue="";
  loadScrollingDropdownApiData:boolean=false;
  dropdownValueFocus="";
  calculatedPageSizeForObservable:any=20;
  constructor(private _http:HttpClient,private _renderer: Renderer2) { 
    this._renderer.listen('window', 'click',(e:Event)=>{
      console.log("e.target",e.target)
      // if(e.target!==this.searchBox.nativeElement||e.target!==this.searchScrollEntirePlaceholder.nativeElement){
        if(e.target !== this.toggleButtonInput.nativeElement && e.target!==this.menu.nativeElement){
          this.displayDropdown=false;
          this.calculatedPageSizeForObservable=20;
         
      }
    })
  }
  toggleMenu() {
    this.displayDropdown = !this.displayDropdown;
        // this.displayDropdown=true;  
    if(this.dropdownSelectedValue!=''){
      this.dropdownValueFocus=this.dropdownSelectedValue;
    }
    this.dropdownSelectedValue='';
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.scrollContainer.nativeElement.scrollTop = 0;
      this.searchInput.nativeElement.focus();
    },0);  
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
  
  ngOnDestroy(): void {
    // this.destroy.unsubscribe();
    if(this.scrollSubscription){
      this.scrollSubscription.unsubscribe();
    }
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
    // scroll container
    this.scrollSubscription=fromEvent(this.scrollContainer.nativeElement, 'scroll', { capture: true }).pipe(map(event=>{      
      this.loadScrollingDropdownApiData=true;
      if (((this.scrollContainer.nativeElement.scrollTop + this.scrollContainer.nativeElement.offsetHeight)) >= (this.scrollContainer.nativeElement.scrollHeight+17)) {
        console.log("fromEvent scroll",event);
        return event;
      }else{
        console.log("null");
        return null
      }
    }),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(search=>{
      console.log("search",search);
      return this.loadResponse(this.dropdownSelectedValue,this.calculatedPageSizeForObservable);
    })).subscribe({
      next:(res)=>{
        console.log("from event",res);
        this.responseData=res;
        this.loadScrollingDropdownApiData=false;
        this.calculatedPageSizeForObservable=res.length+10;
      }
    });
  }
  clearSearchText(){
    this.responseData=[];
    this.dropdownSelectedValue="";
    this.dropdownValueFocus='';
    this.dropdownValueFocus=this.defaultDropdownValue;
    this.scrollContainer.nativeElement.scrollTop = 0;
    //  this.loadResponse().subscribe({
    //   next:(res)=>{
    //     console.log("2 clearSearchText called");
    //     this.responseData=res;
    //   }
    // })
  }
  inputSearchKeyUp(event){
    console.log("event",event)
    if(event.target.value!=''){
        this.scrollContainer.nativeElement.scrollTop = 0;
      }
  } 
  focusSearchKeyUp(){
    // this.scrollContainer.nativeElement.scrollTop = 0;
    // this.displayDropdown=true;  
    // if(this.dropdownSelectedValue!=''){
    //   this.dropdownValueFocus=this.dropdownSelectedValue;
    // }
    // this.dropdownSelectedValue='';
    if(this.responseData.length<10){
      this.loadResponse().subscribe({
        next:(res)=>{
          console.log("3 focusSearchKeyUp called");
          this.responseData=res;
        }
      })
    }
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
