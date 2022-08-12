import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectDialogVisibility, selectSelectedDish} from "../../../../../store/menu.selectors";
import {CloseIngredientDialog} from "../../../../../store/menu.actions";

@Component({
  selector: 'app-ingredients-dialog',
  templateUrl: './ingredients-dialog.component.html',
})
export class IngredientsDialogComponent {

  dialogOpen$ = this.store.select(selectDialogVisibility);

  selectedDish$ = this.store.select(selectSelectedDish);

  constructor(private store: Store) {}

  closeDialog(){
    this.store.dispatch(new CloseIngredientDialog())
  }

}
