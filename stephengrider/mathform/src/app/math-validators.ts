import { AbstractControl } from "@angular/forms";

export class MathValidators {
    // static function can only make use of arguments of functions and not declared variables
    static addition(target:string,sourceOne:string,sourceTwo:string){
        return (form:AbstractControl)=>{
           const sum=form.value[target];
           const firstNumber=form.value[sourceOne];
           const secondNumber=form.value[sourceTwo];
            // check if the added values return the answer or use abstract form control and display a custom error
            if(firstNumber+secondNumber===parseInt(sum)){
               return null;
            }else{
               return {addition:true}
            }
        }
    }

    static subtraction(){

    }
}


