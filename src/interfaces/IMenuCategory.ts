import {IDish} from "./IDish";
import {EMenuCategories} from "../enums/EMenuCategories";

export interface IMenuCategory {
  categoryTitle: EMenuCategories;
  dishes: IDish[];
}
