import { discardPeriodicTasks, fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

// fdesribe to focus only on this test
fdescribe("Async Testing Examples",()=>{
    // if done:DoneFn is not pased and async function completed 
    // there will be error in console
    // it("Asyncronous test example with Jasmine done",(done:DoneFn)=>{
    //     let test=false;
    //     // simulates an api call
    //     setTimeout(()=>{
    //         console.log("running Assertions");
    //         test=true;
    //         expect(test).toBeTruthy();
    //         // async call completed
    //         done();
    //     },1000)
    // })

    //  it("Asyncronous test example setTimeout()",fakeAsync(()=>{
    //     let test=false;
    //     setTimeout(()=>{});
    //     // simulates an api call
    //     setTimeout(()=>{
    //         console.log("running Assertions setTimeout");
    //         test=true;
    //         // async call completed
    //     },1000);
    //     // flush will make all set timeout async
    //     // flush();
    //     // or we can set tick with interval greater than set timeout but better to use flush
    //     tick(1000);
    //     expect(test).toBeTruthy();
    // }))

    // fit - only this utility will be executed
    // promise code testing not working
    // xit("Asyncronous test example plain Promise()",fakeAsync(()=>{
    //     let test=false;
    //     console.log("Creating Promise");
    //     Promise.resolve().then(
    //         ()=>{
    //             console.log("Promise first then() evaluated successfully");
    //             return Promise.resolve();
    //         }
    //     )
    //     .then(()=>{
    //         console.log("Promise second then() evaluated successfully");
    //         test=true;
    //     })
    //     // 
    //     flushMicrotasks();
    //     console.log("Running test assertions");
    //     expect(test).toBeTruthy();
    // })
    // )

    // fit("Asyncronous test example - Observables",fakeAsync(()=>{
    //     let test=false;
    //     console.log("Creating Observables");
    //     const test$=of(test).pipe(delay(1000));
    //     test$.subscribe(()=>{
    //         test=true;
    //     })
    //     // tick(1000);
    //     console.log("Running Test Assertions");
    //     expect(test).toBeTrue();
    // }))
    // it('should test the observable',fakeAsync(()=>{
    //     let isSubscribed=false;
    //     let myObs=of(isSubscribed).pipe(delay(1000));
    //     myObs.subscribe(()=>{
    //         isSubscribed=true;
    //          flush();
    //         flushMicrotasks();
    //         discardPeriodicTasks();            
    //     })
    //     expect(isSubscribed).toBeTrue();
    // }))
    it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
                let isSubscribed=false;
        let myObs=of(isSubscribed).pipe(delay(1000));
       myObs.subscribe(value => {
        value=true;
       expect(value).toBe(true);
       done();
    });
});

})