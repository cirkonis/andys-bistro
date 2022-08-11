import {IDishIngredient} from "./IDishIngredient";

export interface IDish {
  name: string;
  description?: string;
  ingredients: IDishIngredient[];
}
