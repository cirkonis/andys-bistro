import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import * as fromMenu from './menu.reducers';

export interface AppState {
  menu: fromMenu.MenuState;
}

export const reducers: ActionReducerMap<AppState> ={
  menu: fromMenu.reducer,
};

export const getMenuState = createFeatureSelector<fromMenu.MenuState>('menu');

