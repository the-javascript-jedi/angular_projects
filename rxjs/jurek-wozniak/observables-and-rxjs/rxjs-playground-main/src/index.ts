import { EMPTY, Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";


const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App started');

failingHttpRequest$.pipe(
  // catchError(error => EMPTY)
  catchError(error=> of('Fallback value'))
).subscribe({
  next: value => console.log(value),
  error:errorValue=>{console.log("value of error",errorValue)},
  complete: () => console.log('Completed')
});
