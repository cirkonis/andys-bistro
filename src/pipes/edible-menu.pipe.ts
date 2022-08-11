import { Pipe, PipeTransform } from '@angular/core';
import {map, Observable} from "rxjs";
import {IMenu} from "../interfaces/IMenu";
import {EIngredientLabels} from "../enums/EIngredientLabels";

@Pipe({
  name: 'edibleMenuPipe'
})
export class EdibleMenuPipe implements PipeTransform {

  transform(menu$: Observable<IMenu>, preferences: EIngredientLabels[] = []): Observable<any> {
    return menu$.pipe(map((menu) => menu.categories.map((category) => category.dishes.filter(dish => dish.name === 'Vegetables'))));
  }

}
