// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

// Third Party Modules


// Page Modules
import {PagesModule} from "./pages/pages.module";

// Feature Modules
import {FeaturesModule} from "./features/features.module";

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    PagesModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
