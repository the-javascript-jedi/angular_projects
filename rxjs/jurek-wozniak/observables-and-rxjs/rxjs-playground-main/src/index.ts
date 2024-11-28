import { EMPTY, fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, concatMap, map } from "rxjs/operators";

const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton, 'click').pipe(
  map(() => endpointInput.value),
  concatMap(value =>
    ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
      // catchError(error => of(`Could not fetch data: ${error}`))
    )
  )
).subscribe({
  next: value => console.log(value),
  error: err => console.log('Error:', err),
  complete: () => console.log('Completed')
});
