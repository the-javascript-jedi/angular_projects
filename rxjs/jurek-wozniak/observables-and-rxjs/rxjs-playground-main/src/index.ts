import { fromEvent, Observable } from "rxjs";

const triggerButton = document.querySelector('button#trigger');

// const subscriptionFromEvent = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//   event => console.log(event.type, event.x, event.y)
// );

// // after 5 seconds exectue the return function specified in triggerClick$
// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscriptionFromEvent.unsubscribe();
// }, 5000);


const triggerClick$ = new Observable<MouseEvent>(subscriber => {
  const clickHandlerFn = (event:MouseEvent) => {
    console.log('Event callback executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickHandlerFn);

  return () => {
    triggerButton.removeEventListener('click', clickHandlerFn);
  };
});

const subscription = triggerClick$.subscribe(
  event => console.log(event.type, event.x, event.y)
);

// after 5 seconds exectue the return function specified in triggerClick$
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 5000);
