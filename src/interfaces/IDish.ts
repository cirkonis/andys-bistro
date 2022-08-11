import {IDishIngredient} from "./IDishIngredient";

export interface IDish {
  name: string;
  description?: string;
  edible: boolean;
  ingredients: IDishIngredient[];
}
