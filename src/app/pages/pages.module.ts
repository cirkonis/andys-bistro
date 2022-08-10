import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutPageComponent} from "./about-page/about-page.component";
import {AngryPageComponent} from "./angry-page/angry-page.component";
import {EventsPageComponent} from "./events-page/events-page.component";
import {GreenRoomPageComponent} from "./green-room-page/green-room-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {MenuPageComponent} from "./menu-page/menu-page.component";
import {SadPageComponent} from "./sad-page/sad-page.component";
import {FeaturesModule} from "../features/features.module";

@NgModule({
  declarations: [
    AboutPageComponent,
    AngryPageComponent,
    EventsPageComponent,
    GreenRoomPageComponent,
    MainPageComponent,
    MenuPageComponent,
    SadPageComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports:[AboutPageComponent, AngryPageComponent, EventsPageComponent, GreenRoomPageComponent, MainPageComponent, MenuPageComponent, SadPageComponent],
})
export class PagesModule { }
