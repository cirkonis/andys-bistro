import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SadPageComponent } from './sad-page.component';
import {FeaturesModule} from "../../features/features.module";



@NgModule({
  declarations: [
    SadPageComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [SadPageComponent],
})
export class SadPageModule { }
