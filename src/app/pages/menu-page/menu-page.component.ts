import { Component, OnInit } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {MenuData} from "./menu-data/menu-data";
import {IMenu} from "../../../interfaces/IMenu";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  menu$: Observable<IMenu> = of(MenuData);

  dishes$ = this.menu$.pipe(map((menu)=> menu.categories.map((categories)=> categories.dishes)))

  constructor() { }

  ngOnInit(): void {
  }

}
