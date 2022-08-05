import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages-module/main-page/main-page.component";
import {GreenRoomPageComponent} from "./pages-module/green-room-page/green-room-page.component";

const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'green-room', component: GreenRoomPageComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
