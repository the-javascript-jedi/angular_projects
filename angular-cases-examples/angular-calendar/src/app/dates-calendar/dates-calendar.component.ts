import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates-calendar',
  templateUrl: './dates-calendar.component.html',
  styleUrls: ['./dates-calendar.component.scss']
})
export class DatesCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
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
  
    myHolidayFilter = (d: Date): boolean => {
        const time=d.getTime();
        console.log("this.myHolidayDates.find(x=>x.getTime()==time);",this.myHolidayDates.find(x=>x.getTime()==time))
        return !this.myHolidayDates.find(x=>x.getTime()==time);
    }
}
