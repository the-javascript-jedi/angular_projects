import { Routes } from '@angular/router';
import { LadderOne } from './ladders/ladder-one/ladder-one';
import { LadderTwo } from './ladders/ladder-two/ladder-two';

export const routes: Routes = [
  { path: 'loginForm', component: LadderOne },
  { path: 'signupForm', component: LadderTwo },
];
