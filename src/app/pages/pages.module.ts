import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from "./main-page/main-page.module";
import {GreenRoomPageModule} from "./green-room-page/green-room-page.module";
import {AboutPageModule} from "./about-page/about-page.module";
import {EventsPageModule} from "./events-page/events-page.module";
import {SadPageModule} from "./sad-page/sad-page.module";
import {MenuPageModule} from "./menu-page/menu-page.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MainPageModule,
    GreenRoomPageModule,
    AboutPageModule,
    EventsPageModule,
    SadPageModule,
    MenuPageModule,
  ],
  exports:[MainPageModule, GreenRoomPageModule, AboutPageModule, EventsPageModule, SadPageModule, MenuPageModule]
})
export class PagesModule { }
