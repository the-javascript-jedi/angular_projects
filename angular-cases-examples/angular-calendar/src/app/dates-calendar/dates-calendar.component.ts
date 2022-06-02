import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-dates-calendar',
  templateUrl: './dates-calendar.component.html',
  styleUrls: ['./dates-calendar.component.scss']
})
export class DatesCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  // disable dates
myHolidayDates = [
                    new Date("6/1/2022"),
                    new Date("6/4/2022"),
                    new Date("6/6/2022"),
                    new Date("6/10/2022"),
                    new Date("6/14/2022"),
                    new Date("6/17/2022"),
                    new Date("6/18/2022"),
                    new Date("6/20/2022"),
                    new Date("6/25/2022"),
                    new Date("6/26/2022")
                ];
  // highhlight dates
  datesToHighlight = [
    '2022-06-22T18:30:00.000Z',
    '2022-06-23T18:30:00.000Z',
    '2022-06-24T18:30:00.000Z',
    '2022-06-25T18:30:00.000Z',
    '2022-06-26T18:30:00.000Z',
    '2022-06-27T18:30:00.000Z',
    '2022-06-28T18:30:00.000Z',
    '2022-06-29T18:30:00.000Z',
  ];
  // disable dates
    myHolidayFilter = (d: Date): boolean => {
        const time=d.getTime();
        console.log("this.myHolidayDates.find(x=>x.getTime()==time);",this.myHolidayDates.find(x=>x.getTime()==time))
        return !this.myHolidayDates.find(x=>x.getTime()==time);
    }
    // highlight dates
    dateClassCustom=(d: Date): string => {
        const time=d.getTime();
        console.log("this.myHolidayDates.find(x=>x.getTime()==time);",this.myHolidayDates.find(x=>x.getTime()==time))
        if(!this.myHolidayDates.find(x=>x.getTime()==time)){
          return 'highlight-date'
        }else{
          return 'disabled-date'
        }
    }


}
