import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // use this emitter from user component and change the data
  activatedEmitter=new Subject<boolean>();
  constructor() { }
}
