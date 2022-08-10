import {IMenu} from "../interfaces/IMenu";
import {EIngredientLabels} from "../enums/EIngredientLabels";
import {MenuData} from "./menu-data/menu-data";
import {Action} from "@ngrx/store";
import {MenuActionTypes} from "./menu.actions";

export interface MenuState {
  menu: IMenu;
  preferences: EIngredientLabels[];
}

const initialState: MenuState = {
  menu: MenuData,
  preferences: []
}

export function reducer(state = initialState, action: Action): MenuState {
  switch (action.type) {
    case MenuActionTypes.GET_MENU:
      return {
        ...state
      }
    case MenuActionTypes.UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: (action as any).payload
      }
    default:
      return state
  }
}
