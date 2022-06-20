import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disable-filter-dates',
  templateUrl: './disable-filter-dates.component.html',
  styleUrls: ['./disable-filter-dates.component.scss']
})
export class DisableFilterDatesComponent implements OnInit {

  constructor() { }
  minDate;
  maxDate;
  ngOnInit(): void {
  }
// disable dates
myHolidayDates = [
                    new Date("6/1/2022"),
                    // new Date("6/2/2022"),
                    // new Date("6/3/2022"),
                    new Date("6/4/2022"),
                    new Date("6/5/2022"),
                    new Date("6/6/2022"),
                    new Date("6/7/2022"),
                    new Date("6/8/2022"),
                    new Date("6/9/2022"),
                    new Date("6/10/2022"),
                     new Date("6/11/2022"),
                    new Date("6/12/2022"),
                    new Date("6/13/2022"),
                    new Date("6/14/2022"),
                    new Date("6/15/2022"),
                    new Date("6/16/2022"),
                    new Date("6/17/2022"),
                    new Date("6/18/2022"),
                    new Date("6/19/2022"),
                    new Date("6/20/2022"),
                ];
  // disable dates--single date picker
    myHolidayFilter = (d: Date): boolean => {
      // console.log("myHolidayDates--",this.myHolidayDates);
        const time=d.getTime();
          this.minDate = new Date('06/01/2022');
          this.maxDate = new Date('06/06/2022');
        // console.log("this.myHolidayDates.find(x=>x.getTime()==time);",this.myHolidayDates.find(x=>x.getTime()==time))
        return !!this.myHolidayDates.find(x=>x.getTime()==time);
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
