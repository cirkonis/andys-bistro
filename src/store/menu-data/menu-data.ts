import {IMenu} from "../../interfaces/IMenu";
import * as Dishes from './dish-data';
import {EMenuCategories} from "../../enums/EMenuCategories";

export const MENU_DATA : IMenu = {
  title: 'Rustrip Menu',
  categories: [
    {
      categoryTitle: EMenuCategories.DAY_ONE_LUNCH,
      dishes: [Dishes.CHICKEN_AND_VEGGIES, Dishes.JUST_VEGGIES]
    },
    {
      categoryTitle: EMenuCategories.DAY_ONE_DINNER,
      dishes: [Dishes.CHICKEN_AND_VEGGIES, Dishes.JUST_VEGGIES]
    }
  ]
}
