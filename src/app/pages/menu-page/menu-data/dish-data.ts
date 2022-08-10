import {IDish} from "../../../../interfaces/IDish";
import * as Ingredients from './ingredient-data'


export const CHICKEN_AND_VEGGIES: IDish = {
  name: 'Chicken and Vegetables',
  ingredients: [Ingredients.CHICKEN, Ingredients.CARROT, Ingredients.ONION]
}

export const JUST_VEGGIES: IDish = {
  name: 'Vegetables',
  ingredients: [Ingredients.CARROT, Ingredients.ONION]
}
