import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenRoomPageComponent } from './green-room-page.component';
import {FeaturesModule} from "../../features/features.module";



@NgModule({
  declarations: [
    GreenRoomPageComponent
  ],
    imports: [
        CommonModule,
        FeaturesModule
    ]
})
export class GreenRoomPageModule { }
