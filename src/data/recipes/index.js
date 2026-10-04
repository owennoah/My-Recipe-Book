import breakfast from './breakfast.js';
import pasta from './pasta.js';
import sandwiches from './sandwiches.js';
import sides from './sides.js';
import soups from './soups.js';
import texmex from './texmex.js';

export const ALL_BUILTIN_RECIPES = [
  ...breakfast,
  ...pasta,
  ...sandwiches,
  ...sides,
  ...soups,
  ...texmex
];

export const getRecipeById = (id) => ALL_BUILTIN_RECIPES.find((r) => r.id === id);
