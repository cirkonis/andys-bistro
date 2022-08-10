import {Action} from "@ngrx/store";
import {EIngredientLabels} from "../enums/EIngredientLabels";

export enum MenuActionTypes {
  GET_MENU='GET_MENU',
  UPDATE_PREFERENCES='UPDATE_PREFERENCES'
}

export class GetMenuAction implements Action {
  readonly type = MenuActionTypes.GET_MENU;
  constructor() {
  }
}

export class Update_Preferences implements Action {
  readonly type = MenuActionTypes.UPDATE_PREFERENCES;

  constructor(readonly payload: EIngredientLabels) {
  }
}
