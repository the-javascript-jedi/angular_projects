import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

   selected: any;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  maxDate: dayjs.Dayjs;
  minDate: dayjs.Dayjs;
  invalidDates: dayjs.Dayjs[] = [];
  tooltips = [
    {date: dayjs(), text: 'Today is just unselectable'},
    {date:  dayjs().add(2, 'days'), text: 'Yeeeees!!!'}
  ];
  inlineDateTime:any;
  ranges: any = {
    Today: [dayjs(), dayjs()],
    Yesterday: [dayjs().subtract(1, 'days'), dayjs().subtract(1, 'days')],
    'Last 7 Days': [dayjs().subtract(6, 'days'), dayjs()],
    'Last 30 Days': [dayjs().subtract(29, 'days'), dayjs()],
    'This Month': [dayjs().startOf('month'), dayjs().endOf('month')],
    'Last Month': [
      dayjs()
        .subtract(1, 'month')
        .startOf('month'),
      dayjs()
        .subtract(1, 'month')
        .endOf('month')
    ],
    'Last 3 Month': [
      dayjs()
        .subtract(3, 'month')
        .startOf('month'),
      dayjs()
        .subtract(1, 'month')
        .endOf('month')
    ]
  };

  isInvalidDate = (m: dayjs.Dayjs) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') );
  }
  isTooltipDate = (m: dayjs.Dayjs) =>  {
    const tooltip = this.tooltips.find(tt => tt.date.isSame(m, 'day'));
    if (tooltip) {
      return tooltip.text;
    } else {
      return false;
    }
  }

  constructor() {
    this.maxDate = dayjs().add(2,  'weeks');
    this.minDate = dayjs().subtract(3, 'days');

    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    this.selected = {
      startDate: dayjs().subtract(1, 'days').set('hours', 0).set('minutes', 0),
      endDate: dayjs().subtract(1, 'days').set('hours', 23).set('minutes', 59)
    };
  }
  rangeClicked(range:any) {
    console.log('[rangeClicked] range is : ', range);
  }
  datesUpdated(range:any) {
    console.log('[datesUpdated] range is : ', range);
  }

  ngOnInit() {}
  choosedDateTime(e:any) {
    this.inlineDateTime = e;
  }
}
