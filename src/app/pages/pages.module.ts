import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from "./main-page/main-page.module";
import {GreenRoomPageModule} from "./green-room-page/green-room-page.module";
import {AboutPageModule} from "./about-page/about-page.module";
import {EventsPageModule} from "./events-page/events-page.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MainPageModule,
    GreenRoomPageModule,
    AboutPageModule,
    EventsPageModule,
  ],
  exports:[MainPageModule, GreenRoomPageModule, AboutPageModule, EventsPageModule]
})
export class PagesModule { }
