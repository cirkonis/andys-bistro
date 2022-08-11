import {Component, Input} from '@angular/core';
import {IDish} from "../../../../../interfaces/IDish";

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent {
  @Input() categoryTitle: string

  @Input() dishes: IDish[];
}
