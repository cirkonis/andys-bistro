import {Action} from "@ngrx/store";
import {IInedibleFlag} from "../interfaces/IInedibleFlag";
import {IDish} from "../interfaces/IDish";
import {ELanguages} from "../enums/ELanguages";

export enum MenuActionTypes {
  GET_STATE='GET_STATE',
  UPDATE_PREFERENCES='UPDATE_PREFERENCES',
  SET_TOOLBAR_HIDDEN='SET_TOOLBAR_HIDDEN',
  OPEN_INGREDIENT_DIALOG='OPEN_INGREDIENT_DIALOG',
  CLOSE_INGREDIENT_DIALOG='CLOSE_INGREDIENT_DIALOG',
  SET_MENU_LANGUAGE='SET_MENU_LANGUAGE',
}

export class GetStateAction implements Action {
  readonly type = MenuActionTypes.GET_STATE;
  constructor() {
  }
}

export class UpdatePreferences implements Action {
  readonly type = MenuActionTypes.UPDATE_PREFERENCES;

  constructor(readonly payload: IInedibleFlag) {
  }
}

export class SetToolBarHidden implements Action {
    readonly type = MenuActionTypes.SET_TOOLBAR_HIDDEN;

    constructor(){}
}

export class OpenIngredientDialog implements Action {
  readonly type = MenuActionTypes.OPEN_INGREDIENT_DIALOG;

  constructor(readonly payload: IDish){}
}

export class CloseIngredientDialog implements Action {
  readonly type = MenuActionTypes.CLOSE_INGREDIENT_DIALOG;

  constructor(){}
}

export class SetMenuLanguage implements Action {
  readonly type = MenuActionTypes.SET_MENU_LANGUAGE;

  constructor(readonly payload: ELanguages) {}
}

