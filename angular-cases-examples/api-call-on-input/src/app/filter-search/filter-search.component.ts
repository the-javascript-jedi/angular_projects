import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit,AfterViewInit {
    @ViewChild('searchInput', { static: true }) input: ElementRef;

  constructor(private _http:HttpClient) { }
  gamesData=[];
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
  }
  loadGames(search=""):Observable<any>{
        return this._http.get(`http://localhost:5000/api/games?&filter=${search}`).pipe(map(res=>res["gamesData"]))
  }
}
