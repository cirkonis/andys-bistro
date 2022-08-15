import {IDish} from "./IDish";
import {EMenuCategories} from "../enums/EMenuCategories";
import {EMenuDays} from "../enums/EMenuDays";

export interface IMenuCategory {
  day: EMenuDays;
  categoryTitle: EMenuCategories;
  dishes: IDish[];
}
