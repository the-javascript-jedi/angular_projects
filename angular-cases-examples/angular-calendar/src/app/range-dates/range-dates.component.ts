import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-range-dates',
  templateUrl: './range-dates.component.html',
  styleUrls: ['./range-dates.component.scss']
})
export class RangeDatesComponent implements OnInit {
  myHolidayDates = [];
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log("this.myHolidayDates",this.myHolidayDates);
    this.myHolidayDates=[
                    new Date("6/1/2022"),
                    new Date("6/4/2022"),
                    new Date("6/6/2022"),
                    new Date("6/10/2022"),
                    new Date("6/14/2022"),
                    new Date("6/17/2022"),
                    new Date("6/18/2022"),
                    new Date("6/20/2022"),
                    new Date("6/25/2022"),
                    new Date("6/26/2022"),
                ]
  }

  
  //disable range filter for material range calendar
  rangeFilter(d: Date): any {
    var myHolidayDatesNew = [
                    new Date("6/1/2022"),
                    new Date("6/4/2022"),
                    new Date("6/6/2022"),
                    new Date("6/10/2022"),
                    new Date("6/14/2022"),
                    new Date("6/17/2022"),
                    new Date("6/18/2022"),
                    new Date("6/20/2022"),
                    new Date("6/25/2022"),
                    new Date("6/26/2022"),
                ];
    console.log("this.myHolidayDates--rangeFilter",myHolidayDatesNew);
    // return d.getDate() > 20;
    const time=d.getTime();
    console.log("date",d)
    console.log("time",time);

    if(myHolidayDatesNew.find(x=>x.setHours(0,0,0,0)===time)){
      return true;
    }else{
      return false;
    }
  }

  dateClassCustomRange(d:Date){
      var myHolidayDatesNew = [
                    new Date("6/1/2022"),
                    new Date("6/4/2022"),
                    new Date("6/6/2022"),
                    new Date("6/10/2022"),
                    new Date("6/14/2022"),
                    new Date("6/17/2022"),
                    new Date("6/18/2022"),
                    new Date("6/20/2022"),
                    new Date("6/25/2022"),
                    new Date("6/26/2022"),
                ];
    // console.log("d-dateClassCustomRange",d);
    console.log("myHolidayDates-dateClassCustomRange",this.myHolidayDates);
    const time=d.getTime();
     if(myHolidayDatesNew.find(x=>x.getTime()===time)){
      return 'highlight-date';
    }else{
      return 'disabled-date';
    }
    return 'true'
    }
  }