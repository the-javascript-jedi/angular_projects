import { Routes } from '@angular/router';
import { LadderOne } from './ladders/ladder-one/ladder-one';
import { LadderTwo } from './ladders/ladder-two/ladder-two';
import { LadderThree } from './ladders/ladder-three/ladder-three';
import { LadderFour } from './ladders/ladder-four/ladder-four';
import { LadderFive } from './ladders/ladder-five/ladder-five';
import { LadderSix } from './ladders/ladder-six/ladder-six';

export const routes: Routes = [
  { path: 'loginForm', component: LadderOne },
  { path: 'signupForm', component: LadderTwo },
  { path: 'userNameAvailability', component: LadderThree },
  { path: 'userNameAvailability', component: LadderThree },
  { path: 'dynamicForm', component: LadderFour },
  { path: 'dynamicMultipleForm', component: LadderFive },
  { path: 'dynamicSearch', component: LadderSix },
];
