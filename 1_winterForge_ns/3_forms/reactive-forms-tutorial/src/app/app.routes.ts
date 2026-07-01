import { Routes } from '@angular/router';
import { LadderOne } from './ladders/ladder-one/ladder-one';
import { LadderTwo } from './ladders/ladder-two/ladder-two';
import { LadderThree } from './ladders/ladder-three/ladder-three';
import { LadderFour } from './ladders/ladder-four/ladder-four';

export const routes: Routes = [
  { path: 'loginForm', component: LadderOne },
  { path: 'signupForm', component: LadderTwo },
  { path: 'userNameAvailability', component: LadderThree },
  { path: 'userNameAvailability', component: LadderThree },
  { path: 'dynamicForm', component: LadderFour },
];
