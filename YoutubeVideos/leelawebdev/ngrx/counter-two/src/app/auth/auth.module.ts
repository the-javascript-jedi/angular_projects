import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';  

const routes:Routes=[
    {
        path:'',children:[
            {path:'',redirectTo:'login'},
            {path:'login',component:LoginComponent},
        ]
    }
]

@NgModule({
    declarations:[
    LoginComponent
  ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})

export class AuthModule{}