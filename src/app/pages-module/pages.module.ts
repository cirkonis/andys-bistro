import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from "./main-page/main-page.module";
import {GreenRoomPageModule} from "./green-room-page/green-room-page.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageModule,
    GreenRoomPageModule
  ],
  exports:[MainPageModule, GreenRoomPageModule]
})
export class PagesModule { }
