import {IPreference} from "../../interfaces/IPreference";
import {EIngredientLabels} from "../../enums/EIngredientLabels";

export const PREFERENCE_DATA: IPreference[] = [
  {
    label: EIngredientLabels.ONION,
    isActive: false
  },
  {
    label: EIngredientLabels.MEAT,
    isActive: false
  },
  {
    label: EIngredientLabels.ANIMAL_BY_PRODUCT,
    isActive: false
  },
  {
    label: EIngredientLabels.MUSHROOM,
    isActive: false
  },
  {
    label: EIngredientLabels.PEANUTS,
    isActive: false
  },
]
