import {IDish} from "../../interfaces/IDish";
import * as Ingredients from './ingredient-data'

// BREAD
export const BREAD: IDish ={
  name: 'Pain Frais',
  description: `It's BREAD!! Freshly made every day!`,
  edible: true,
  ingredients:[Ingredients.BREAD],
  buffet: true,
  translatedName: 'Fresh Baked Bread',
}


// BUFFETS

export const BREAKFAST_BUFFET: IDish = {
  name: 'Buffet de Petit Déjeuner',
  description: 'An assortment of things one typically finds as food that is to be eaten in the morning...',
  edible: true,
  ingredients: [],
  buffet: true,
  translatedName: 'Breakfast Buffet',
}

export const LUNCH_BUFFET: IDish = {
  name: 'Table Froide Danoise',
  description: 'An assortment of things one typically finds as food that is eaten by Danes during the lunch hour...',
  edible: true,
  ingredients: [],
  buffet: true,
  translatedName: 'Danish Cold Table-ish',
}

export const BRUNCH_BUFFET: IDish = {
  name: 'Brunch Aléatoire',
  description: 'Maybe a bit of the breakfast bar, maybe some Danish cold table, maybe some left overs, maybe what ever else we want to cook and maybe some things you can use to pack away some food to take with you :)',
  edible: true,
  ingredients: [],
  buffet: true,
  translatedName: 'Random Brunch of Stuff',
}

// SUNDAY DISHES

export const RATATOUILLE: IDish ={
  name: `La Célèbre Ratatouille d'Andy`,
  edible: true,
  ingredients: [Ingredients.POTATO, Ingredients.ONION, Ingredients.GARLIC, Ingredients.GINGER, Ingredients.SQUASH, Ingredients.TOMATO, Ingredients.RED_CHILLI, Ingredients.EGGPLANT, Ingredients.BELL_PEPPER, Ingredients.BASIL],
  translatedName: `Andy's Famous Ratatouille`,
}

export const BRUSCHETTA: IDish = {
  name: `Bruschetta Française`,
  disclaimer: 'Mozzarella-less will also be served for the lactose intolerant and vegans',
  edible: true,
  ingredients: [Ingredients.BREAD, Ingredients.TOMATO, Ingredients.GARLIC_UNCOOKED, Ingredients.ONION_UNCOOKED, Ingredients.BASIL, Ingredients.MOZZARELLA],
  translatedName: 'French Bruschetta',
}

export const BRUSCHETTA_BREADLESS: IDish ={
  name: `Bruschetta Française sans Pain`,
  disclaimer: 'Mozzarella-less will also be served for the lactose intolerant and vegans',
  edible: true,
  ingredients: [Ingredients.SQUASH, Ingredients.TOMATO, Ingredients.GARLIC_UNCOOKED, Ingredients.ONION_UNCOOKED, Ingredients.BASIL, Ingredients.MOZZARELLA],
  translatedName: 'Breadless Bruschetta',
}

export const BROCCOLI_SALAD: IDish ={
  name: `Salade de Broccoli`,
  edible: true,
  ingredients: [Ingredients.BROCCOLI_UNCOOKED, Ingredients.CARROT_UNCOOKED, Ingredients.ONION_UNCOOKED, Ingredients.VEGAN_RANCH, Ingredients.SUNFLOWER_SEEDS, Ingredients.DRIED_CRANBERRIES],
  translatedName: 'Broccoli Salad',
}

// MONDAY DISHES

export const PASTA_SALAD: IDish ={
  name: `Salade de Pâtes`,
  edible: true,
  ingredients: [Ingredients.VEGAN_RANCH, Ingredients.PASTA, Ingredients.TOMATO, Ingredients.BROCCOLI_UNCOOKED, Ingredients.CAULIFLOWER_UNCOOKED, Ingredients.PEAS, Ingredients.CARROT_UNCOOKED, Ingredients.CUCUMBER],
  translatedName: 'Pasta Salad',
}

export const CASSEROLE: IDish ={
  name: 'The Monsieur Green Bean Casserole',
  edible: true,
  ingredients: [Ingredients.GREEN_BEANS, Ingredients.ONION, Ingredients.MUSHROOM, Ingredients.TURKEY_BACON, Ingredients.BUTTER, Ingredients.SHALLOTS, Ingredients.CHICKEN_BROTH, Ingredients.CREAM],
  translatedName: 'The Mr. Green Bean Casserole',
}

export const CASSOULET: IDish ={
  name: `Cassoulet aux Champignon Fumé`,
  edible: true,
  ingredients: [Ingredients.SHALLOTS, Ingredients.GARLIC, Ingredients.CARROT, Ingredients.CELERY, Ingredients.WHITE_WINE, Ingredients.BEANS, Ingredients.VEGETABLE_BROTH, Ingredients.TOMATO, Ingredients.MUSHROOM],
  translatedName: 'Smokey Mushroom Cassoulet',
}

export const CHICKPEA_SALAD: IDish ={
  name: `Salade de Pois Chiches`,
  edible: true,
  ingredients: [Ingredients.CHICK_PEAS, Ingredients.CUCUMBER, Ingredients.TOMATO, Ingredients.BELL_PEPPER, Ingredients.ONION_UNCOOKED, Ingredients.LEMON],
  translatedName: 'Chick Pea Salad',
}

//TUESDAY DISHES

export const POTATO_SALAD: IDish ={
  name: `Salade de Pommes de Terre`,
  edible: true,
  ingredients: [Ingredients.VEGAN_RANCH, Ingredients.POTATO, Ingredients.TOMATO, Ingredients.BROCCOLI_UNCOOKED, Ingredients.CAULIFLOWER_UNCOOKED, Ingredients.PEAS, Ingredients.CARROT_UNCOOKED, Ingredients.CUCUMBER],
  translatedName: 'Potato Salad',

}

export const BOUEF_BOURGUIGNON: IDish ={
  name: 'Bouef Bourguignon',
  edible: true,
  ingredients: [Ingredients.BEEF, Ingredients.TURKEY_BACON, Ingredients.ONION, Ingredients.SHALLOTS, Ingredients.CARROT, Ingredients.GARLIC, Ingredients.RED_WINE, Ingredients.BUTTER],
  translatedName: 'Beef Bourguignon',
}

export const MUSHROOM_BOURGUIGNON: IDish ={
  name: 'Champignon Bourguignon',
  edible: true,
  ingredients: [Ingredients.ONION, Ingredients.GARLIC, Ingredients.MUSHROOM, Ingredients.RED_WINE, Ingredients.TOMATO, Ingredients.CARROT, Ingredients.CELERY, Ingredients.VEGETABLE_BROTH, Ingredients.FLOUR],
  translatedName: 'Mushroom Bourguignon'
}

export const GOAT_CHEESE_BAGUETTE: IDish ={
  name: 'Baguette au Chèvre',
  edible: true,
  ingredients: [Ingredients. GOAT_CHEESE, Ingredients.BREAD,Ingredients.MAPLE_SYRUP],
  translatedName: 'Goat Cheese Baguette',
}

export const LENTIL_SALAD: IDish ={
  name: 'Salade de Lentilles',
  edible: true,
  ingredients: [Ingredients.LENTILS, Ingredients.AVOCADO, Ingredients.SPINNACH, Ingredients.WALNUTS, Ingredients.APPLE, Ingredients.POMEGRANATE, Ingredients.ORANGE, Ingredients.TAHINI, Ingredients.GARLIC],
  translatedName: 'Lentil Salad',
}
