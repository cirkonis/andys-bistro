import {EInedibleFlags} from "../enums/EInedibleFlags";
import {EInedibleFlagTypes} from "../enums/EInedibleFlagTypes";

export interface IInedibleFlag {
  label: EInedibleFlags;
  displayName: string;
  type: EInedibleFlagTypes;
  isActive: boolean;
}
