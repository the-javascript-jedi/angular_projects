import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

// import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UsernameAvailableValidator implements AsyncValidator {
  // constructor(private userService: UserService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    // return this.userService.checkUsername(control.value).pipe(
    //   map(isTaken => (isTaken ? { usernameTaken: true } : null)),
    //   catchError(() => of(null)) // if API fails, don't block the user
    // );
    const takenUsernames = ['nithin', 'admin', 'superuser'];
    return of(control.value).pipe(
      delay(3000), // simulates API call
      map((username) =>
        takenUsernames.includes(username.toLowerCase()) ? { usernameTaken: true } : null,
      ),
    );
  }
}
