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
  {
    label: EInedibleFlags.TOMATO,
    displayName: 'Tomato',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false,
  },
  {
    label: EInedibleFlags.PEANUTS,
    displayName: 'Peanuts',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false,
  },
  {
    label: EInedibleFlags.ONION,
    displayName: 'Onion',
    type: EInedibleFlagTypes.CAN_NOT_EAT,
    isActive: false
  },
]
