import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlternatingRowsComponent } from './alternating-rows/alternating-rows.component';
import { ChessBoardChatgptComponent } from './chess-board-chatgpt/chess-board-chatgpt.component';
import { ChessBoardNsComponent } from './chess-board-ns/chess-board-ns.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component'; 

const routes: Routes = [
  {path:"",component:FormReactiveComponent},
  {path:"alternatingRows",component:AlternatingRowsComponent},
  {path:"chessBoard-chatgpt",component:ChessBoardChatgptComponent},
  {path:"chessBoard-ns",component:ChessBoardNsComponent},
  {path:"customDirective",component:CustomDirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
