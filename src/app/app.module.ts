// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third Party Modules
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

// Page Modules
import {PagesModule} from "./pages/pages.module";

// Feature Modules
import {FeaturesModule} from "./features/features.module";

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// App Files
import {reducers} from "../store";
import {environment} from "../environments/environment";

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
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
