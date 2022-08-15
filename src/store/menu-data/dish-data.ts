import {IDish} from "../../interfaces/IDish";
import * as Ingredients from './ingredient-data'

// BREAD
export const BREAD: IDish ={
  name: 'Pain Frais',
  description: 'Freshly made every day!',
  edible: true,
  ingredients:[Ingredients.BREAD],
  buffet: true,
}


// BUFFETS

export const BREAKFAST_BUFFET: IDish = {
  name: 'Buffet de Petit Déjeuner',
  description: 'An assortment of things one typically finds as food that is to be eaten in the morning...',
  edible: true,
  ingredients: [],
  buffet: true,
}

export const LUNCH_BUFFET: IDish = {
  name: 'Table Froide Danoise',
  description: 'An assortment of things one typically finds as food that is eaten by Danes during the lunch hour...',
  edible: true,
  ingredients: [],
  buffet: true,
}

export const BRUNCH_BUFFET: IDish = {
  name: 'Brunch Aléatoire',
  description: 'Maybe a bit of the breakfast bar, maybe some Danish cold table, maybe some left overs, maybe what ever else we want to cook and maybe some things you can use to pack away some food to take with you :)',
  edible: true,
  ingredients: [],
  buffet: true,
}

// SUNDAY DISHES

export const RATATOUILLE: IDish ={
  name: `La Célèbre Ratatouille d'Andy`,
  edible: true,
  ingredients: [Ingredients.POTATO, Ingredients.ONION, Ingredients.GARLIC, Ingredients.GINGER, Ingredients.SQUASH, Ingredients.TOMATO, Ingredients.RED_CHILLI, Ingredients.EGGPLANT, Ingredients.BELL_PEPPER, Ingredients.BASIL]
}

export const BRUSCHETTA: IDish ={
  name: `Bruschetta Française`,
  disclaimer: 'Mozzarella-less will also be served for the lactose intolerant and vegans',
  edible: true,
  ingredients: [Ingredients.BREAD, Ingredients.TOMATO, Ingredients.GARLIC, Ingredients.ONION, Ingredients.BASIL, Ingredients.MOZZARELLA]
}

export const BRUSCHETTA_BREADLESS: IDish ={
  name: `Bruschetta Française sans Pain`,
  disclaimer: 'Mozzarella-less will also be served for the lactose intolerant and vegans',
  edible: true,
  ingredients: [Ingredients.SQUASH, Ingredients.TOMATO, Ingredients.GARLIC, Ingredients.ONION, Ingredients.BASIL, Ingredients.MOZZARELLA]
}

export const BROCCOLI_SALAD: IDish ={
  name: `Salade de Broccoli`,
  edible: true,
  ingredients: [Ingredients.BROCCOLI, Ingredients.CARROT, Ingredients.ONION, Ingredients.VEGAN_RANCH, Ingredients.SUNFLOWER_SEEDS, Ingredients.DRIED_CRANBERRIES]
}

// MONDAY DISHES

export const PASTA_SALAD: IDish ={
  name: `Salade de Pâtes`,
  edible: true,
  ingredients: [Ingredients.VEGAN_RANCH, Ingredients.PASTA, Ingredients.TOMATO, Ingredients.BROCCOLI, Ingredients.CAULIFLOWER, Ingredients.PEAS, Ingredients.CARROT, Ingredients.CUCUMBER],
}

export const CASSEROLE: IDish ={
  name: 'Casserole de Haricots Verts',
  edible: true,
  ingredients: [Ingredients.GREEN_BEANS, Ingredients.ONION, Ingredients.MUSHROOM, Ingredients.TURKEY_BACON, Ingredients.BUTTER, Ingredients.SHALLOTS, Ingredients.CHICKEN_BROTH, Ingredients.CREAM],
}

export const CASSOULET: IDish ={
  name: `Cassoulet aux Champignon Fumé`,
  edible: true,
  ingredients: [Ingredients.SHALLOTS, Ingredients.GARLIC, Ingredients.CARROT, Ingredients.CELERY, Ingredients.WHITE_WINE, Ingredients.BEANS, Ingredients.VEGETABLE_BROTH, Ingredients.TOMATO, Ingredients.MUSHROOM],
}

export const CHICKPEA_SALAD: IDish ={
  name: `Salade de Pois Chiches`,
  edible: true,
  ingredients: [Ingredients.CHICK_PEAS, Ingredients.CUCUMBER, Ingredients.TOMATO, Ingredients.BELL_PEPPER, Ingredients.ONION, Ingredients.LEMON],
}

//TUESDAY DISHES

export const POTATO_SALAD: IDish ={
  name: `Salade de Pommes de Terre`,
  edible: true,
  ingredients: [Ingredients.VEGAN_RANCH, Ingredients.POTATO, Ingredients.TOMATO, Ingredients.BROCCOLI, Ingredients.CAULIFLOWER, Ingredients.PEAS, Ingredients.CARROT, Ingredients.CUCUMBER],

}

export const BOUEF_BOURGUIGNON: IDish ={
  name: 'Bouef Bourguignon',
  edible: true,
  ingredients: [Ingredients.BEEF, Ingredients.TURKEY_BACON, Ingredients.ONION, Ingredients.SHALLOTS, Ingredients.CARROT, Ingredients.GARLIC, Ingredients.RED_WINE, Ingredients.BUTTER]
}

export const MUSHROOM_BOURGUIGNON: IDish ={
  name: 'Mushroom Bourguignon',
  edible: true,
  ingredients: [Ingredients.ONION, Ingredients.GARLIC, Ingredients.MUSHROOM, Ingredients.RED_WINE, Ingredients.TOMATO, Ingredients.CARROT, Ingredients.CELERY, Ingredients.VEGETABLE_BROTH, Ingredients.FLOUR]
}

export const GOAT_CHEESE_BAGUETTE: IDish ={
  name: 'Baguette au Chèvre',
  edible: true,
  ingredients: [Ingredients. GOAT_CHEESE, Ingredients.BREAD,Ingredients.MAPLE_SYRUP]
}

export const LENTIL_SALAD: IDish ={
  name: 'Salade de Lentilles',
  edible: true,
  ingredients: [Ingredients.LENTILS, Ingredients.AVOCADO, Ingredients.SPINNACH, Ingredients.WALNUTS, Ingredients.APPLE, Ingredients.POMEGRANATE, Ingredients.ORANGE, Ingredients.TAHINI, Ingredients.GARLIC]
}
