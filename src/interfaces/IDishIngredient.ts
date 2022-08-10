import {EIngredientNames} from "../enums/EIngredientNames";
import {EIngredientLabels} from "../enums/EIngredientLabels";

export interface IDishIngredient {
  name: EIngredientNames;
  contains: EIngredientLabels[];
}
