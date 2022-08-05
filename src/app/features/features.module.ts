import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


// Modules


//Components
import {ButtonComponent} from "./button/button.component";
import { AdComponent } from './ad/ad.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AdComponent
  ],
  exports: [
    ButtonComponent,
    AdComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FeaturesModule { }
