import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectDialogVisibility, selectMenuLanguage, selectSelectedDish} from "../../../../../store/menu.selectors";
import {CloseIngredientDialog} from "../../../../../store/menu.actions";
import {ELanguages} from "../../../../../enums/ELanguages";

@Component({
  selector: 'app-ingredients-dialog',
  templateUrl: './ingredients-dialog.component.html',
})
export class IngredientsDialogComponent {

  languages = ELanguages;

  dialogOpen$ = this.store.select(selectDialogVisibility);

  selectedDish$ = this.store.select(selectSelectedDish);

  menuLanguage$ = this.store.select(selectMenuLanguage);

  constructor(private store: Store) {}

  closeDialog(){
    this.store.dispatch(new CloseIngredientDialog())
  }

}
