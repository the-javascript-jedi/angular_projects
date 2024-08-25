import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';  
import { StoreModule } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./state/auth.selector";
import { AuthReducer } from "./state/auth.reducer";

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
        StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),
        ReactiveFormsModule
    ]
})

export class AuthModule{}