import {IMenu} from "../interfaces/IMenu";
import {MENU_DATA} from "./menu-data/menu-data";
import {PREFERENCE_DATA} from "./menu-data/preference-data";
import {Action} from "@ngrx/store";
import {MenuActionTypes} from "./menu.actions";
import {IPreference} from "../interfaces/IPreference"

export interface MenuState {
  menu: IMenu;
  edibleMenu: IMenu;
  preferences: IPreference[];
}

const initialState: MenuState = {
  menu: JSON.parse(JSON.stringify(MENU_DATA)),
  edibleMenu: JSON.parse(JSON.stringify(MENU_DATA)),
  preferences: [...PREFERENCE_DATA],
}

export function reducer(state = initialState, action: Action): MenuState {
  switch (action.type) {
    case MenuActionTypes.GET_STATE:
      return {
        ...state
      }
    case MenuActionTypes.UPDATE_PREFERENCES:

      // Update the state preferences array
      const index = state.preferences.findIndex(preference => preference.label === (action as any).payload.label)
      let newPreferences: IPreference[] = [...state.preferences];
      let activeState: boolean = !(action as any).payload.isActive
      newPreferences[index] = {label: (action as any).payload.label, isActive: activeState}

      let activePreferences: IPreference[] = newPreferences.filter(preference => preference.isActive === true);

      console.log(activePreferences);

      // Update edible dishes
      let newEdibleMenu: IMenu = JSON.parse(JSON.stringify(state.edibleMenu));
      for (let category of newEdibleMenu.categories) {
        for (let dish of category.dishes) {
          dish.edible = true;
          for (let ingredient of dish.ingredients) {
            for (let element of ingredient.contains) {
              for (let preference of activePreferences) {
                if (preference.label === element) {
                  dish.edible = false;
                  break;
                }
              }
            }
          }
        }
      }

      return {
        ...state,
        edibleMenu: newEdibleMenu,
        preferences: newPreferences
      }
    default:
      return state
  }
}
