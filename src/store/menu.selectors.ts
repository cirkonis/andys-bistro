import {createSelector} from "@ngrx/store";
import {getMenuState} from "./index";

export const selectState = createSelector(getMenuState, (state) => state);

export const selectMenu = createSelector(getMenuState, (state) => state.menu);

export const selectPreferences = createSelector(getMenuState, (state) => state.preferences);

