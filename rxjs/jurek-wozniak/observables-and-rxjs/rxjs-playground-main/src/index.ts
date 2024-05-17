import { Observable } from "rxjs";


const interval$ = new Observable<number>(subscriber => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 2000);
  //observable cleanup -without this observer will keep on emitting even after unsubscribing
  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval$.subscribe(value => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
