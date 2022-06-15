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
  // disable dates--single date picker
    myHolidayFilter = (d: Date): boolean => {
      // console.log("myHolidayDates--",this.myHolidayDates);
        const time=d.getTime();
        // console.log("this.myHolidayDates.find(x=>x.getTime()==time);",this.myHolidayDates.find(x=>x.getTime()==time))
        return !this.myHolidayDates.find(x=>x.getTime()==time);
    }
    // highlight dates--single date picker
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
