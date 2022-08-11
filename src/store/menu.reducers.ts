import {IMenu} from "../interfaces/IMenu";
import {MENU_DATA} from "./menu-data/menu-data";
import {PREFERENCE_DATA} from "./menu-data/preference-data";
import {Action} from "@ngrx/store";
import {MenuActionTypes} from "./menu.actions";
import {IPreference} from "../interfaces/IPreference"

export interface MenuState {
  menu: IMenu;
  preferences: IPreference[];
}

const initialState: MenuState = {
  menu: MENU_DATA,
  preferences: PREFERENCE_DATA,
}

export function reducer(state = initialState, action: Action): MenuState {
  switch (action.type) {
    case MenuActionTypes.GET_STATE:
      return {
        ...state
      }
    case MenuActionTypes.UPDATE_PREFERENCES:
      const index = state.preferences.findIndex(preference => preference.label === (action as any).payload.label)
      let newPreferences = [...state.preferences];
      let activeState = !(action as any).payload.isActive
      newPreferences[index] = {label: (action as any).payload.label, isActive: activeState}
      return {
        ...state,
        preferences: newPreferences
      }
    default:
      return state
  }
}
