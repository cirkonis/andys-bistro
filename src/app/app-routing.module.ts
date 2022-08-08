import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {GreenRoomPageComponent} from "./pages/green-room-page/green-room-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'green-room', component: GreenRoomPageComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
