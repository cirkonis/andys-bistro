import {IDishIngredient} from "./IDishIngredient";

export interface IDish {
  name: string;
  description?: string;
  disclaimer?: string;
  edible: boolean;
  ingredients: IDishIngredient[];
  buffet?: boolean;
}
