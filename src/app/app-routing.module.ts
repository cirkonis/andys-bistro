import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {GreenRoomPageComponent} from "./pages/green-room-page/green-room-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {EventsPageComponent} from "./pages/events-page/events-page.component";
import {SadPageComponent} from "./pages/sad-page/sad-page.component";
import {MenuPageComponent} from "./pages/menu-page/menu-page.component";

const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'green-room', component: GreenRoomPageComponent},
  {path: 'menu', component: MenuPageComponent},
  {path: 'sad', component: SadPageComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: SadPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
