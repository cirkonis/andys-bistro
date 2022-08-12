import {createSelector} from "@ngrx/store";
import {getMenuState} from "./index";

export const selectState = createSelector(getMenuState, (state) => state);

export const selectMenu = createSelector(getMenuState, (state) => state.menu);

export const selectEdibleMenu = createSelector(getMenuState, (state) => state.edibleMenu);

export const selectPreferences = createSelector(getMenuState, (state) => state.inedibleFlags);

export const selectToolBarHidden = createSelector(getMenuState, (state) => state.toolBarHidden);

export const selectSelectedDish = createSelector(getMenuState, (state) => state.selectedDish);

export const selectDialogVisibility = createSelector(getMenuState, (state) => state.ingredientDialogVisible);

