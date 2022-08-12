import {EIngredientNames} from "../enums/EIngredientNames";
import {EInedibleFlags} from "../enums/EInedibleFlags";

export interface IDishIngredient {
  name: EIngredientNames;
  inedibleFlags: EInedibleFlags[];
}
