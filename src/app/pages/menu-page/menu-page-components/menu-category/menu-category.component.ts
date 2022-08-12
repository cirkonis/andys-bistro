import {Component, Input} from '@angular/core';
import {IDish} from "../../../../../interfaces/IDish";
import {OpenIngredientDialog} from "../../../../../store/menu.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
})
export class MenuCategoryComponent {
  @Input() categoryTitle: string

  @Input() dishes: IDish[];

  constructor(private store: Store) {}

  openDialog(dish: IDish){
    this.store.dispatch(new OpenIngredientDialog(dish))
  }

}
