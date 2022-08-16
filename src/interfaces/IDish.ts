import {IDishIngredient} from "./IDishIngredient";

export interface IDish {
  name: string;
  translatedName: string;
  edible: boolean;
  ingredients: IDishIngredient[];
  buffet?: boolean;
  description?: string;
  disclaimer?: string;
}
