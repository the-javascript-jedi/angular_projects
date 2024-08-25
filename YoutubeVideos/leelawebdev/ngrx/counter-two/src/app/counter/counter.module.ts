import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from "@angular/common";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";
import { COUNTER_STATE_NAME } from "./state/counter.selector";

const routes:Routes=[
    {
        path:'',
        component:CounterComponent
    }
];

@NgModule({    
    declarations:[
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterInputComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer)
    ]
})
export class CounterModule{}