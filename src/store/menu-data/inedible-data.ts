import {IInedibleFlag} from "../../interfaces/IInedibleFlag";
import {EInedibleFlags} from "../../enums/EInedibleFlags";
import {EInedibleFlagTypes} from "../../enums/EInedibleFlagTypes";

export const INEDIBLE_DATA: IInedibleFlag[] = [
  {
    label: EInedibleFlags.VEGAN,
    displayName: 'Vegan',
    type: EInedibleFlagTypes.DIETARY_RESTRICTION,
    isActive: false
  },
  {
    label: EInedibleFlags.VEGETARIAN,
    displayName: 'Vegetarian',
    type: EInedibleFlagTypes.DIETARY_RESTRICTION,
    isActive: false
  },
  {
    label: EInedibleFlags.PESCETARIAN,
    displayName: 'Pescetarian',
    type: EInedibleFlagTypes.DIETARY_RESTRICTION,
    isActive: false
  },
  {
    label: EInedibleFlags.GLUTEN,
    displayName: 'Gluten Intolerant',
    type: EInedibleFlagTypes.DIETARY_RESTRICTION,
    isActive: false
  },
  {
    label: EInedibleFlags.LACTOSE,
    displayName: 'Lactose Intolerant',
    type: EInedibleFlagTypes.DIETARY_RESTRICTION,
    isActive: false
  },
  //---------------------------------------------------------------------------
  {
    label: EInedibleFlags.APPLE,
    displayName: 'Apple',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false,
  },
  {
    label: EInedibleFlags.CITRUS_FRUIT,
    displayName: 'Citrus fruit',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false,
  },
  {
    label: EInedibleFlags.MUSHROOM,
    displayName: 'Mushroom',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false,
  },
  {
    label: EInedibleFlags.WALNUTS,
    displayName: 'Nuts',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false,
  },
  {
    label: EInedibleFlags.UNCOOKED_ROOT_VEGGIES,
    displayName: 'Uncooked root veggies',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false,
  },

]
