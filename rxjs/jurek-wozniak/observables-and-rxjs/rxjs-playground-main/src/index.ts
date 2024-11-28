import { of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";


of(1, 7, 3, 6, 2).pipe(
  tap({
    next: value => console.log('Spy 1:', value)
  }),
  filter(value => value > 5),
  tap({
    next: value => console.log('Spy 2:', value)
  }),
  map(value => value * 2),
).subscribe(value => console.log('Output:', value));
