import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


// Modules


//Components
import {ButtonComponent} from "./button/button.component";
import { AdComponent } from './ad/ad.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    AdComponent,
    ToolbarComponent
  ],
    exports: [
        ButtonComponent,
        AdComponent,
        ToolbarComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FeaturesModule { }
