import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {IMenu} from "../../../interfaces/IMenu";
import {Store} from "@ngrx/store";
import {selectEdibleMenu} from "../../../store/menu.selectors";
import {EMenuDays} from "../../../enums/EMenuDays";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
})
export class MenuPageComponent {
  days = EMenuDays;

  $edibleMenu: Observable<IMenu> = this.store.select(selectEdibleMenu);

  constructor(private store: Store) {
  }

}
