import {IDishIngredient} from "./IDishIngredient";

export interface IDish {
  name: string;
  ingredients: IDishIngredient[];
}
