import {IDish} from "../../interfaces/IDish";
import * as Ingredients from './ingredient-data'


export const CHICKEN_AND_VEGGIES: IDish = {
  name: 'Chicken and Vegetables',
  description: 'Just like chicken and veggies',
  edible: true,
  ingredients: [Ingredients.CHICKEN, Ingredients.CARROT, Ingredients.ONION]
}

export const JUST_VEGGIES: IDish = {
  name: 'Vegetables',
  description: 'Just like chicken and veggies but with no chicken',
  edible: true,
  ingredients: [Ingredients.CARROT, Ingredients.ONION]
}
