// ng test to run the karma test runner

import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// describe a test suite function - it should be same name as the service we want to test
describe('CalculatorService',()=>{
    // define a specification using it
    // specification for add function
    it('should add two numbers',()=>{
        // pending() - will just by pass the test case
        // pending();
        // create a instance of the calculator service
        // since the calculator service is injecting a logger service we need to inject that as well directly
        const calculator=new CalculatorService(new LoggerService());
        // pass the arguments to the add function
        const result=calculator.add(2,2);
        // test assertion that result is 4
        expect(result).toBe(4);

    });
    it('should subtract two numbers',()=>{
        // pending(); 
        const calculator=new CalculatorService(new LoggerService());
        const result=calculator.subtract(2,2);
        expect(result).toBe(0,"unexpected subtraction result");
    });

})