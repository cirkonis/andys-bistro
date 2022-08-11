import {EIngredientLabels} from "../enums/EIngredientLabels";

export interface IPreference {
  label: EIngredientLabels;
  isActive: boolean;
}
