import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events-page.component';
import {FeaturesModule} from "../../features/features.module";



@NgModule({
  declarations: [
    EventsPageComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ]
})
export class EventsPageModule { }
