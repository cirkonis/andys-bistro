import {IMenu} from "../interfaces/IMenu";
import {MENU_DATA} from "./menu-data/menu-data";
import {INEDIBLE_DATA} from "./menu-data/inedible-data";
import {Action} from "@ngrx/store";
import {MenuActionTypes} from "./menu.actions";
import {IInedibleFlag} from "../interfaces/IInedibleFlag"
import {IDish} from "../interfaces/IDish";

export interface MenuState {
  menu: IMenu;
  edibleMenu: IMenu;
  inedibleFlags: IInedibleFlag[];
  toolBarHidden: boolean;
  ingredientDialogVisible: boolean;
  selectedDish: IDish;
}

const initialState: MenuState = {
  menu: JSON.parse(JSON.stringify(MENU_DATA)),
  edibleMenu: JSON.parse(JSON.stringify(MENU_DATA)),
  inedibleFlags: [...INEDIBLE_DATA],
  toolBarHidden: true,
  ingredientDialogVisible: false,
  selectedDish: null,
}

export function reducer(state = initialState, action: Action): MenuState {
  switch (action.type) {
    case MenuActionTypes.GET_STATE:
      return {
        ...state
      }
    case MenuActionTypes.UPDATE_PREFERENCES:

      // Update the state preferences array
      const index = state.inedibleFlags.findIndex(flag => flag.label === (action as any).payload.label)
      let newPreferences: IInedibleFlag[] = [...state.inedibleFlags];
      let activeState: boolean = !(action as any).payload.isActive
      newPreferences[index] = { ... (action as any).payload, isActive: activeState}

      let activePreferences: IInedibleFlag[] = newPreferences.filter(preference => preference.isActive === true);

      console.log(activePreferences);

      // Update edible dishes
      let newEdibleMenu: IMenu = JSON.parse(JSON.stringify(state.edibleMenu));
      for (let category of newEdibleMenu.categories) {
        for (let dish of category.dishes) {
          dish.edible = true;
          for (let ingredient of dish.ingredients) {
            for (let element of ingredient.inedibleFlags) {
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
        inedibleFlags: newPreferences
      }
    case MenuActionTypes.SET_TOOLBAR_HIDDEN:
      return {
        ...state,
        toolBarHidden: !state.toolBarHidden,
      }
    case MenuActionTypes.OPEN_INGREDIENT_DIALOG:
      return {
        ...state,
        selectedDish: (action as any).payload,
        ingredientDialogVisible: true,
      }
    case MenuActionTypes.CLOSE_INGREDIENT_DIALOG:
      return {
        ...state,
        selectedDish: null,
        ingredientDialogVisible: false,
      }
    default:
      return state
  }
}
