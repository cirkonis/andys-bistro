import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {IMenu} from "../../../interfaces/IMenu";
import {Store} from "@ngrx/store";
import {selectEdibleMenu} from "../../../store/menu.selectors";

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
})
export class MenuPageComponent {
  $edibleMenu: Observable<IMenu> = this.store.select(selectEdibleMenu);

  constructor(private store: Store) {
  }
}
