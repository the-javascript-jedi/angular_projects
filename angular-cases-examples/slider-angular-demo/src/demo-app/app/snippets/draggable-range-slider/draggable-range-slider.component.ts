import { Component } from '@angular/core';
import { Options, ChangeContext, PointerType  } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-draggable-range-slider',
  templateUrl: './draggable-range-slider.component.html'
})
export class DraggableRangeSliderComponent {
  dataValues=["Nithin","Winu","Rian","Delince","Sven","Jeffy","Navin","Jose","Sam","Saro","Arun"]
  minValue: number = 0;
  maxValue: number = 10;
  logText: string = '';
  options: Options = {
    floor: 0,
    ceil: this.dataValues.length-1,
    draggableRange: true,
    noSwitching: true,
    showTicks: true,
    // showTicksValues: true,
   getLegend: (value: number): string => {
      // return '<b>T</b>' + value+this.dataValues[value];
      return this.dataValues[value];
    }
    
  };

  onUserChangeStart(changeContext: ChangeContext): void {
    this.logText += `onUserChangeStart(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;
  }

  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
           `value: ${changeContext.value}, ` +
           `highValue: ${changeContext.highValue}}`;
  }
}
