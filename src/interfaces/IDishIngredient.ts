import {EInedibleFlags} from "../enums/EInedibleFlags";

export interface IDishIngredient {
  name: string;
  inedibleFlags: EInedibleFlags[];
}
