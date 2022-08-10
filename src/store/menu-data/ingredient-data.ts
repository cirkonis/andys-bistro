import {IDishIngredient} from "../../interfaces/IDishIngredient";
import {EIngredientNames} from "../../enums/EIngredientNames";
import {EIngredientLabels} from "../../enums/EIngredientLabels";

export const CARROT: IDishIngredient = {
  name: EIngredientNames.CARROT,
  contains: []
}

export const ONION: IDishIngredient = {
  name: EIngredientNames.ONION,
  contains: [EIngredientLabels.ONION]
}

export const CHICKEN: IDishIngredient = {
  name: EIngredientNames.CHICKEN,
  contains: [EIngredientLabels.MEAT],
}
