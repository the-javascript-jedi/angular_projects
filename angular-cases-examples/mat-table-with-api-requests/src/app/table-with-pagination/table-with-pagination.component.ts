import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
// import {Course} from "../model/course";
// import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay, catchError, finalize} from 'rxjs/operators';
import {merge, fromEvent, throwError} from 'rxjs';
// import {Lesson} from '../model/lesson';
import {SelectionModel} from '@angular/cdk/collections';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-table-with-pagination',
  templateUrl: './table-with-pagination.component.html',
  styleUrls: ['./table-with-pagination.component.scss']
})
export class TableWithPaginationComponent implements OnInit,AfterViewInit {

  constructor(private _tableData:TableDataService) { }

  course:any;
  games: any[] = [];
  loading = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<any>(true, []);
  tableDataCount:number=0;

  ngOnInit(): void {
    this.findGamesDataCount();
    this.loadGamesPage();
  }
  ngAfterViewInit() {
    console.log("this.sort",this.sort);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadGamesPage())
        )
        .subscribe();
  }

  displayedColumns = ['select', 'seqNo', "description", "category"];
  expandedLesson: any = null;

  loadGamesPage(){
    this.loading = true;
    let sortDirection=this.sort?.direction ?? "asc";
    let pageIndex=this.paginator?.pageIndex ?? 0;
    let pageSize=this.paginator?.pageSize ?? 5;
    let sortOrder=this.sort?.active ?? "seqNo";
    this._tableData.findGamesData(sortDirection,pageIndex,pageSize,sortOrder).pipe(
      tap(lessons => {
        this.games = lessons;
        console.log("this.games",this.games);
        return this.games;
      }),
      catchError(err=>{
        console.log("Error loading games", err);
        alert("Error loading games.");
        // return throwError(err);
        return err;
      }),
      finalize(() => this.loading = false)
    )
    .subscribe();
  }
  // Load Games Page Count
  findGamesDataCount(){
    this._tableData.findGamesDataCount().subscribe({
      next:(response)=>{
        console.log("response--findGamesDataCount",response);
        this.tableDataCount=response['gamesPageCount'];
      },
      error:(error)=>{
        console.log("error-findGamesDataCount",error)
      }
    })
  }
// toggle all has issues need to look into it
  toggleAll(){
    if (this.isAllSelected()) {
      this.selection.clear();
    }
    else {
        this.selection.select(...this.games);
    }
  }
  isAllSelected() {
    return this.selection.selected?.length == this.games?.length;
  }
  onLessonToggled(data){
    console.log("data-onLessonToggled",data);
    this.selection.toggle(data);
    console.log("this.selection.selected",this.selection.selected);
  }

  onToggleLesson(lesson){
    if (lesson == this.expandedLesson) {
      this.expandedLesson = null;
    }
    else {
        this.expandedLesson = lesson;
    }
  }

  getSelection(){
    // does not work for repeating values
    console.log("this.selection",this.selection);
  }
}
