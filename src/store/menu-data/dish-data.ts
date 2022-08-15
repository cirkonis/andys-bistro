import {IDish} from "../../interfaces/IDish";
import * as Ingredients from './ingredient-data'

// BREAD
export const BREAD: IDish ={
  name: 'Pain Frais',
  description: 'Freshly made every day!',
  edible: true,
  ingredients:[],
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
  ingredients: []
}

export const BRUSCHETTA: IDish ={
  name: `Bruschetta Française`,
  edible: true,
  ingredients: []
}

export const BROCOLI_SALAD: IDish ={
  name: `Salade de Brocoli`,
  edible: true,
  ingredients: []
}

// MONDAY DISHES

export const PASTA_SALAD: IDish ={
  name: `Salade de Pâtes`,
  edible: true,
  ingredients: [],
}

export const CASSEROLE: IDish ={
  name: 'Casserole',
  edible: true,
  ingredients: [],
}

export const CASSOULET: IDish ={
  name: 'Cassoulet',
  edible: true,
  ingredients: [],
}

export const CHICKPEA_SALAD: IDish ={
  name: `Salade de Pois Chiches`,
  edible: true,
  ingredients: [],
}

//TUESDAY DISHES

export const POTATO_SALAD: IDish ={
  name: `Salade de Pommes de Terre`,
  edible: true,
  ingredients: [],
}

export const BOUEF_BOURGUIGNON: IDish ={
  name: 'Bouef Bourguignon',
  edible: true,
  ingredients: []
}

export const MUSHROOM_BOURGUIGNON: IDish ={
  name: 'Mushroom Bourguignon',
  edible: true,
  ingredients: []
}

export const GOAT_CHEESE_BAGUETTE: IDish ={
  name: 'Baguette au Chèvre',
  edible: true,
  ingredients: []
}

export const LENTIL_SALAD: IDish ={
  name: 'Salade de Lentilles',
  edible: true,
  ingredients: []
}
