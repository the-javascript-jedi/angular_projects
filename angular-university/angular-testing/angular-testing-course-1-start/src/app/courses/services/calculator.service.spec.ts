// ng test to run the karma test runner

import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from '@angular/core/testing';


// describe a test suite function - it should be same name as the service we want to test
describe('CalculatorService',()=>{
    let calculator:CalculatorService,loggerSpy:any;
    // test initialization
    beforeEach(()=>{
        console.log("Calling Before Each");
        loggerSpy=jasmine.createSpyObj('LoggerService',["log"]);
        
        TestBed.configureTestingModule({
            // using providers we can provide services to our test.
            // logger service is provided to calculator service so we inject it using provide keyword
            // we will provide the jasmine spy in place of the injected original instance
            // the jasmine spy contains the method which need to be injected
            providers:[
                CalculatorService,
                {provide:LoggerService,useValue:loggerSpy}
            ]
        })

        calculator=TestBed.inject(CalculatorService);
    })

    // define a specification using it
    // specification for add function
    it('should add two numbers',()=>{
        console.log("add test");
        const result=calculator.add(2,2);
        expect(result).toBe(4);        
        // test assertion that the logger service is called only once
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });
    it('should subtract two numbers',()=>{
        console.log("subtract test");
        const result=calculator.subtract(2,2);
        expect(result).toBe(0,"unexpected subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

})