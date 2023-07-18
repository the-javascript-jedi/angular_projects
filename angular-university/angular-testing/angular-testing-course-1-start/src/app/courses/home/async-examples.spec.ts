import { fakeAsync, flush, tick } from "@angular/core/testing";

// fdesribe to focus only on this test
fdescribe("Async Testing Examples",()=>{
    // if done:DoneFn is not pased and async function completed 
    // there will be error in console
    it("Asyncronous test example with Jasmine done",(done:DoneFn)=>{
        let test=false;
        // simulates an api call
        setTimeout(()=>{
            console.log("running Assertions");
            test=true;
            expect(test).toBeTruthy();
            // async call completed
            done();
        },1000)
    })

     it("Asyncronous test example setTimeout()",fakeAsync(()=>{
        let test=false;
        setTimeout(()=>{});
        // simulates an api call
        setTimeout(()=>{
            console.log("running Assertions setTimeout");
            test=true;
            // async call completed
        },1000);
        // flush will make all set timeout async
        // flush();
        // or we can set tick with interval greater than set timeout but better to use flush
        tick(1000);
        expect(test).toBeTruthy();
    }))
})