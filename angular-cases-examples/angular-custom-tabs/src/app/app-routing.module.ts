import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';
import { ParentTabsComponent } from './parent-tabs/parent-tabs.component';

const routes: Routes = [
  {path:'',redirectTo:'app-tab-navigation', pathMatch: 'full' },
  { path: 'app-tab-navigation', component:TabNavigationComponent  },
  { path: 'app-parent-tabs', component:ParentTabsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
