import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {merge, fromEvent,concat,BehaviorSubject, Observable, Subscription} from 'rxjs';
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
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent implements OnInit,AfterViewInit {
  @ViewChild('searchInput', { static: true }) input: ElementRef;
  @ViewChild('indication', { static: true }) indication: ElementRef;

  constructor(private _http:HttpClient) { 
  
  }
  
  currentSection: BehaviorSubject<String> = new BehaviorSubject('home');
  sections: string[] = ['home', 'about', 'features', 'contact']
  keepTrack() {
   
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {

      const element = document.getElementById(section);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewHeight / 2) {
          this.currentSection.next(section);
        }
      } else {
      }
    }
     console.log("this.currentSection",this.currentSection.value)
  }
  gamesData=[];
  displayDropdown=false;
  dropdownSelectedValue="";
  ngOnInit(): void {
    this.loadGames().subscribe({
      next:(res)=>{
        this.gamesData=res;
      }
    })
  }
   ngAfterViewInit() {
    //distinctUntilChanged() - If two consecutive values are exactly the same, we only want to emit one value and we can get that functionality using the distinct until changed operator with this operator, we no longer will have duplicate values in our output.
        //switchMap()-switch map is going to unsubscribe from the search that was still ongoing when we type new value.That is an outdated search and the Http  request is going to be canceled. 
        const searchLessons$=fromEvent<any>(this.input.nativeElement,'keyup').pipe(
            map(event=>event.target.value),
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(search=>this.loadGames(search))
        )
        
        searchLessons$.subscribe({
      next:(res)=>{
        this.gamesData=res;
      }
    })
    // scroll
     this.indication.nativeElement.addEventListener('scroll', () => {
     let listElement: HTMLElement
        console.log("scrolled"); 
        // console.log("listElement.scrollTop",this.indication.nativeElement.scrollTop); 
        // console.log("listElement.offsetHeight",this.indication.nativeElement.offsetHeight); 
        console.log("listElement.scrollTop + listElement.offsetHeight",this.indication.nativeElement.scrollTop + this.indication.nativeElement.offsetHeight); 
        console.log("listElement.scrollHeight",this.indication.nativeElement.scrollHeight); 
         if (((this.indication.nativeElement.scrollTop + this.indication.nativeElement.offsetHeight)) >= (this.indication.nativeElement.scrollHeight+17)) {
          console.log("listElement.make api call");
          // const searchGamesOnScroll$=fromEvent<any>(this.loadGames('',1).subscribe())
          let pageSize=10;
          const searchGamesOnScroll$=this.loadGames('h',20).subscribe({
            next:(data)=>{
              this.gamesData=data;
            }
          });
         }
   })
  }
  // make api call
  loadGames(search="",pageSize=10):Observable<any>{
    console.log("api called")
        return this._http.get(`http://localhost:5000/api/games?&filter=${search}&pageSize=${pageSize}`).pipe(map(res=>res["gamesData"]))
  }
  selectListItem(selectedItem){
    console.log("selectedItem",selectedItem);
    this.dropdownSelectedValue=selectedItem.description
    this.displayDropdown=false;
  }

}
