import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page.component';
import {FeaturesModule} from "../../features/features.module";



@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [MenuPageComponent],
})
export class MenuPageModule { }
