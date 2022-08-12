import {IDishIngredient} from "../../interfaces/IDishIngredient";
import {EIngredientNames} from "../../enums/EIngredientNames";
import {EInedibleFlags} from "../../enums/EInedibleFlags";

export const CARROT: IDishIngredient = {
  name: EIngredientNames.CARROT,
  inedibleFlags: []
}

export const ONION: IDishIngredient = {
  name: EIngredientNames.ONION,
  inedibleFlags: [EInedibleFlags.ONION]
}

export const CHICKEN: IDishIngredient = {
  name: EIngredientNames.CHICKEN,
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.VEGETARIAN],
}
