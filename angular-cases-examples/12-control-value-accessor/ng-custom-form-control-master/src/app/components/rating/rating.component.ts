import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RatingComponent),
    },
  ],
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  @Input() disabled = false;
  value = 2;
  hoveredRating = 2;
  isMouseOver = false;
  isDisabled: boolean = false;
  private control!: NgControl;
  
  onChange = (_: any) => {};
  onTouch = (_: any) => {};

  constructor(private injector: Injector) {}
  
  registerOnChange(angularProvidedFunction) {
    this.onChange = angularProvidedFunction;
  }

  registerOnTouched(angularProvidedFunction) {
    this.onTouch = angularProvidedFunction;
  }

  writeValue(angularProvidedValue) {
    this.value = angularProvidedValue;
  }

  setDisabledState(angularProvidedDisabledVal) {
    this.disabled = angularProvidedDisabledVal;
  }

  onRatingMouseEnter(rating: number) {
    if (this.disabled) return;
    this.hoveredRating = rating;
    this.isMouseOver = true;
  }
  onRatingMouseLeave() {
    if (this.disabled) return;
    this.hoveredRating = null;
    this.isMouseOver = false;
  }
  selectRating(rating: number) {
    if (this.disabled) return;
    this.value = rating;
    this.onChange(this.value);
  }  
  ngOnInit(): void {}
}
//
