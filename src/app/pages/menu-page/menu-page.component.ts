import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IMenu} from "../../../interfaces/IMenu";
import {Store} from "@ngrx/store";
import {selectMenu} from "../../../store/menu.selectors";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  $menu: Observable<IMenu> = this.store.select(selectMenu);

  // dishes$ = this.menu$.pipe(map((menu)=> menu.categories.map((categories)=> categories.dishes)))

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
