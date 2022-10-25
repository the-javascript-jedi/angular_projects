import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent implements OnInit {
    form:FormGroup;
    errors:string[]=[];
    // error code to display error
    messagePerErrorCode={
        min:"The minimum length is 10 characters",
        uppercase:"At least one upper case characters",
        digits:"At least one numeric character"
    }

    constructor(private fb: FormBuilder,private authService:AuthService) {
        this.form = this.fb.group({
            email: ['test@gmail.com',Validators.required],
            password: ['Password10',Validators.required],
            confirm: ['Password10',Validators.required]
        });
    }
    ngOnInit() { }
    signUp() {
        this.errors=[];
        const val = this.form.value;
        //TODO
        if(val.email&&val.password&&val.password===val.confirm){
            this.authService.signUp(val.email,val.password).subscribe({
                next:(response)=>{
                    console.log("user created",response);
                    // response=>this.errors=response.error.errors;
                },
                error:(responseError)=>{
                    this.errors=responseError.error.errors;
                }
            });
        }
    }
}