import {IDishIngredient} from "../../interfaces/IDishIngredient";
import {EInedibleFlags} from "../../enums/EInedibleFlags";

export const APPLE:IDishIngredient ={
  name: 'Apple',
  inedibleFlags: [EInedibleFlags.APPLE],
}

export const AVOCADO: IDishIngredient ={
  name: 'Avocado',
  inedibleFlags:[],
}

export const BASIL: IDishIngredient ={
  name: 'Basil Leaves',
  inedibleFlags: [],
}

export const BEANS: IDishIngredient ={
  name: 'Beans',
  inedibleFlags: [],
}

export const BELL_PEPPER: IDishIngredient ={
  name: 'Bell Pepper',
  inedibleFlags: [],
}

export const BEEF: IDishIngredient ={
  name: 'Beef',
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.VEGETARIAN, EInedibleFlags.PESCETARIAN],
}

export const BEEF_BROTH: IDishIngredient ={
  name: 'Beef_BROTH',
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.VEGETARIAN, EInedibleFlags.PESCETARIAN],
}

export const BREAD: IDishIngredient ={
  name: 'Bread',
  inedibleFlags: [EInedibleFlags.GLUTEN]
}

export const BREAD_CRUMB: IDishIngredient ={
  name: 'Bread Crumbs',
  inedibleFlags: [EInedibleFlags.GLUTEN]
}

export const BROCCOLI: IDishIngredient ={
  name: 'Broccoli',
  inedibleFlags: [],
}

export const BROCCOLI_UNCOOKED: IDishIngredient ={
  name: 'Broccoli',
  inedibleFlags: [EInedibleFlags.UNCOOKED_ROOT_VEGGIES],
}

export const BUTTER: IDishIngredient ={
  name: 'Butter',
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.LACTOSE]
}

export const CARROT: IDishIngredient = {
  name: 'Carrot',
  inedibleFlags: []
}

export const CARROT_UNCOOKED: IDishIngredient = {
  name: 'Carrot',
  inedibleFlags: [EInedibleFlags.UNCOOKED_ROOT_VEGGIES]
}

export const CAULIFLOWER: IDishIngredient ={
  name: 'Cauliflower',
  inedibleFlags: [],
}

export const CAULIFLOWER_UNCOOKED: IDishIngredient ={
  name: 'Cauliflower',
  inedibleFlags: [EInedibleFlags.UNCOOKED_ROOT_VEGGIES],
}

export const CELERY: IDishIngredient ={
  name: 'Celery',
  inedibleFlags: [],
}

export const CHICKEN_BROTH: IDishIngredient ={
  name: 'Chicken Broth',
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.VEGETARIAN, EInedibleFlags.PESCETARIAN]
}

export const CHICK_PEAS: IDishIngredient ={
  name: 'Chick Peas',
  inedibleFlags: [],
}

export const CREAM: IDishIngredient ={
  name: 'Cream',
  inedibleFlags: [EInedibleFlags.LACTOSE, EInedibleFlags.VEGAN]
}

export const CUCUMBER: IDishIngredient ={
  name: 'Cucumber',
  inedibleFlags: [],
}

export const DRIED_CRANBERRIES: IDishIngredient ={
  name: 'Dried Cranberries',
  inedibleFlags: [],
}

export const EGGPLANT: IDishIngredient ={
  name: 'Eggplant',
  inedibleFlags: [],
}

export const FLOUR: IDishIngredient ={
  name:'Flour',
  inedibleFlags: [EInedibleFlags.GLUTEN]
}

export const GARLIC: IDishIngredient ={
  name: 'Garlic',
  inedibleFlags: [],
}

export const GARLIC_UNCOOKED: IDishIngredient ={
  name: 'Garlic',
  inedibleFlags: [EInedibleFlags.UNCOOKED_ROOT_VEGGIES],
}

export const GINGER: IDishIngredient ={
  name: 'Ginger',
  inedibleFlags: [],
}

export const GREEN_BEANS: IDishIngredient ={
  name: 'Green Beans',
  inedibleFlags: [],
}

export const GOAT_CHEESE: IDishIngredient ={
  name: 'Goat Cheese',
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.LACTOSE]
}

export const LEMON: IDishIngredient ={
  name: 'Lemon',
  inedibleFlags: [EInedibleFlags.CITRUS_FRUIT],
}

export const LENTILS: IDishIngredient ={
  name:'Lentils',
  inedibleFlags: [],
}

export const MOZZARELLA: IDishIngredient ={
  name: 'Mozzarella',
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.LACTOSE]
}

export const MUSHROOM: IDishIngredient ={
  name: 'Mushroom',
  inedibleFlags: [EInedibleFlags.MUSHROOM],
}

export const MAPLE_SYRUP: IDishIngredient ={
  name: 'Maple Syrup',
  inedibleFlags: [],
}

export const ONION: IDishIngredient = {
  name: 'Onion',
  inedibleFlags: [],
}

export const ONION_UNCOOKED: IDishIngredient = {
  name: 'Onion',
  inedibleFlags: [EInedibleFlags.UNCOOKED_ROOT_VEGGIES],
}

export const ORANGE: IDishIngredient ={
  name: 'Orange',
  inedibleFlags: [EInedibleFlags.CITRUS_FRUIT],
}

export const PARSLEY: IDishIngredient ={
  name: 'Parsley',
  inedibleFlags: [],
}

export const PASTA: IDishIngredient = {
  name: 'Pasta',
  inedibleFlags: [EInedibleFlags.GLUTEN]
}

export const PEAS: IDishIngredient ={
  name: 'Peas',
  inedibleFlags: [],
}

export const POTATO: IDishIngredient ={
  name: 'Potato',
  inedibleFlags: []
}

export const POMEGRANATE: IDishIngredient ={
  name: 'Pomegranate',
  inedibleFlags: [],
}

export const RED_CHILLI: IDishIngredient ={
  name: 'Red Chilli',
  inedibleFlags: [],
}

export const RED_WINE: IDishIngredient ={
  name: 'Red Wine',
  inedibleFlags: [],
}

export const SHALLOTS: IDishIngredient ={
  name: 'Shallots',
  inedibleFlags: [],
}

export const SUNFLOWER_SEEDS: IDishIngredient ={
  name: 'Sunflower Seeds',
  inedibleFlags: [],
}

export const SQUASH: IDishIngredient ={
  name: 'Squash',
  inedibleFlags: [],
}

export const SPINNACH: IDishIngredient ={
  name: 'Spinach',
  inedibleFlags: []
}

export const TAHINI: IDishIngredient ={
  name: 'Tahini',
  inedibleFlags: [],
}

export const TOMATO: IDishIngredient ={
  name: 'Tomato',
  inedibleFlags: []
}

export const TURKEY_BACON: IDishIngredient ={
  name: 'Turkey Bacon',
  inedibleFlags: [EInedibleFlags.VEGAN, EInedibleFlags.VEGETARIAN],
}

export const VEGAN_RANCH: IDishIngredient = {
  name: 'Vegan Ranch',
  inedibleFlags: [EInedibleFlags.APPLE],
}

export const VEGAN_MAYO: IDishIngredient = {
  name: 'Vegan Mayo',
  inedibleFlags: [],
}

export const VEGETABLE_BROTH: IDishIngredient ={
  name: 'Vegetable Broth',
  inedibleFlags: [],
}

export const WALNUTS: IDishIngredient ={
  name: 'Walnuts',
  inedibleFlags: [EInedibleFlags.WALNUTS],
}

export const WHITE_WINE:IDishIngredient ={
  name: 'White Wine',
  inedibleFlags: [],
}





