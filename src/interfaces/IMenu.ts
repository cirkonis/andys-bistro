import {IMenuCategory} from "./IMenuCategory";

export interface IMenu {
  title: string;
  categories: IMenuCategory[];
}
