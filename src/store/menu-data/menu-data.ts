import {IMenu} from "../../interfaces/IMenu";
import * as Dishes from './dish-data';
import {EMenuCategories} from "../../enums/EMenuCategories";
import {EMenuDays} from "../../enums/EMenuDays";

export const MENU_DATA: IMenu = {
  title: 'Rustrip Menu',
  categories: [
    {
      day: EMenuDays.SUNDAY,
      categoryTitle: EMenuCategories.DINNER,
      dishes: [Dishes.RATATOUILLE, Dishes.BRUSCHETTA, Dishes.BROCOLI_SALAD]
    },
    {
      day: EMenuDays.MONDAY,
      categoryTitle: EMenuCategories.BREAKFAST,
      dishes: [Dishes.BREAKFAST_BUFFET, Dishes.BREAD]
    },
    {
      day: EMenuDays.MONDAY,
      categoryTitle: EMenuCategories.LUNCH,
      dishes: [Dishes.LUNCH_BUFFET, Dishes.PASTA_SALAD,Dishes.BREAD]
    },
    {
      day: EMenuDays.MONDAY,
      categoryTitle: EMenuCategories.DINNER,
      dishes: [Dishes.CASSEROLE, Dishes.CASSOULET, Dishes.CHICKPEA_SALAD]
    },
    {
      day: EMenuDays.TUESDAY,
      categoryTitle: EMenuCategories.BREAKFAST,
      dishes: [Dishes.BREAKFAST_BUFFET, Dishes.BREAD]
    },
    {
      day: EMenuDays.TUESDAY,
      categoryTitle: EMenuCategories.LUNCH,
      dishes: [Dishes.LUNCH_BUFFET, Dishes.POTATO_SALAD, Dishes.BREAD]
    },
    {
      day: EMenuDays.TUESDAY,
      categoryTitle: EMenuCategories.DINNER,
      dishes: [Dishes.BOUEF_BOURGUIGNON, Dishes.MUSHROOM_BOURGUIGNON, Dishes.GOAT_CHEESE_BAGUETTE, Dishes.LENTIL_SALAD ]
    },

    {
      day: EMenuDays.WEDNESDAY,
      categoryTitle: EMenuCategories.BRUNCH,
      dishes: [Dishes.BRUNCH_BUFFET]
    },



  ]
}
