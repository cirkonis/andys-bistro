import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {FeaturesModule} from "../../features/features.module";



@NgModule({
    declarations: [
        MainPageComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        FeaturesModule
    ]
})
export class MainPageModule { }
