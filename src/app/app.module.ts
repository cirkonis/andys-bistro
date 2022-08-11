// Angular Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Third Party Modules
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


// App Modules
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from "./pages/pages.module";
import {FeaturesModule} from "./features/features.module";

// Everything else

import {reducers} from "../store";
import {environment} from "../environments/environment";
import {AppComponent} from './app.component';

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
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
