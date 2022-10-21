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
    constructor(private fb: FormBuilder,private authService:AuthService) {
        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required],
            confirm: ['',Validators.required]
        });
    }
    ngOnInit() { }
    signUp() {
        const val = this.form.value;
        //TODO
        if(val.email&&val.password&&val.password===val.confirm){
            this.authService.signUp(val.email,val.password).subscribe({
                next:()=>{
                    console.log("user created");
                },
                error:()=>{}
            });
        }
    }
}