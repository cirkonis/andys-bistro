import {Pipe, PipeTransform} from '@angular/core';
import {map, Observable} from "rxjs";
import {IMenu} from "../interfaces/IMenu";
import {EIngredientLabels} from "../enums/EIngredientLabels";
import {IPreference} from "../interfaces/IPreference";

@Pipe({
  name: 'edibleMenuPipe'
})
export class EdibleMenuPipe implements PipeTransform {

  transform(menu$: Observable<IMenu>, preferences: IPreference[] = []): Observable<any> {
    return menu$.pipe(map((menu) => menu.categories.map((category) =>
          category.dishes.filter(dish => {
              for(let ingredient of dish.ingredients){
                for(let element of ingredient.contains){
                  if(element === EIngredientLabels.MEAT){
                    return false
                  }
                }
              }
              return true
            }
          )
        )
      )
    );
  }

}

// transform(menu$: Observable<IMenu>, preferences: IPreference[] = []): Observable<any> {
//   return menu$.pipe(map((menu) => menu.categories.map((category) =>
//         category.dishes.filter(dish => {
//             for(let ingredient of dish.ingredients){
//               for(let element of ingredient.contains){
//                 if(element === EIngredientLabels.MEAT){
//                   return false
//                 }
//               }
//             }
//             return true
//           }
//         )
//       )
//     )
//   );
// }
