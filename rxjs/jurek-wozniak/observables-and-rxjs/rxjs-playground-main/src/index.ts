import { forkJoin, Observable } from "rxjs";

// observable simulates success
const a$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 5000);

  return () => {
    console.log('A teardown');
  };
});

// observable simulates an error
const b$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error('Failure!');
  }, 3000);
  
  return () => {
    console.log('B teardown');
  };
});

// even if one observale subscription fails, other future observales are cancelled and error logic is executed and complete return logic is called
forkJoin([a$, b$]).subscribe({
  next: value => console.log(value),
  error: err => console.log('Error:', err)
});
