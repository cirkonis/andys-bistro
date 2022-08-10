import {IMenu} from "../../interfaces/IMenu";
import * as Dishes from './dish-data';

export const MenuData: IMenu = {
  title: 'Rustrip Menu',
  categories: [
    {
      type: 'DAY 1 Lunch',
      dishes: [Dishes.CHICKEN_AND_VEGGIES, Dishes.JUST_VEGGIES]
    },
    {
      type: 'DAY 1 Dinner',
      dishes: [Dishes.CHICKEN_AND_VEGGIES, Dishes.JUST_VEGGIES]
    }
  ]
}
