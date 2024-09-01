import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RatingComponent } from '../components/rating/rating.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(RatingComponent, { static: true })
  ratingComponent: RatingComponent;
  reviewForm = new FormGroup({
    comment: new FormControl('', [Validators.required,]),
    rating: new FormControl(4, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });
  constructor() {}

  ngOnInit() {}

  submitReview(form: FormGroup) {
    console.log(form.value);
  }

  ngOnDestroy() {}
}
