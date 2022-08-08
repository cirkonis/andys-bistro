import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from "./about-page.component";
import {FeaturesModule} from "../../features/features.module";


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [
    AboutPageComponent
  ],
})
export class AboutPageModule { }
