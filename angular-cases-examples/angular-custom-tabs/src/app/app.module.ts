import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParentTabsComponent } from './parent-tabs/parent-tabs.component';
import { TabOneComponent } from './parent-tabs/tab-one/tab-one.component';
import { TabTwoComponent } from './parent-tabs/tab-two/tab-two.component';
import { TabThreeComponent } from './parent-tabs/tab-three/tab-three.component';
import { ChildTabsComponent } from './parent-tabs/tab-three/child-tabs/child-tabs.component';
import { MissionComponent } from './parent-tabs/tab-three/child-tabs/mission/mission.component';
import { VisionComponent } from './parent-tabs/tab-three/child-tabs/vision/vision.component';
import { ValuesComponent } from './parent-tabs/tab-three/child-tabs/values/values.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    VisionComponent,
    ValuesComponent,
    ParentTabsComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    ChildTabsComponent,
    TabNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
