import {Action} from "@ngrx/store";
import {IInedibleFlag} from "../interfaces/IInedibleFlag";

export enum MenuActionTypes {
  GET_STATE='GET_STATE',
  UPDATE_PREFERENCES='UPDATE_PREFERENCES'
}

export class GetStateAction implements Action {
  readonly type = MenuActionTypes.GET_STATE;
  constructor() {
  }
}

export class UpdatePreferences implements Action {
  readonly type = MenuActionTypes.UPDATE_PREFERENCES;

  constructor(readonly payload: IInedibleFlag) {
  }
}
