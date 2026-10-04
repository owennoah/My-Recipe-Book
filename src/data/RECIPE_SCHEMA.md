# Recipe Data Schema (Saddle & Spoon)

Every recipe file lives in `src/data/recipes/<category-id>.js` and looks like:

```js
/** @type {import('../schema').Recipe[]} */
const recipes = [
  {
    id: 'classic-buttermilk-pancakes',        // kebab-case, globally unique
    title: 'Classic Buttermilk Pancakes',
    description: 'Fluffy, golden diner-style pancakes with a tangy buttermilk crumb.', // 1–2 sentences
    category: 'breakfast',                     // must equal the file's category id
    region: 'Diner Classic',                   // US region / origin flavor, e.g. 'New England', 'Cajun', 'Tex-Mex', 'Midwest', 'Southern', 'California', 'Diner Classic', 'Italian-American'
    mealTypes: ['breakfast'],                  // any of: breakfast, lunch, dinner, snack, dessert, drink, side
    emoji: '🥞',                               // ONE emoji that represents the dish
    servings: 4,                               // integer
    prepTime: 10,                              // minutes, integer
    cookTime: 15,                              // minutes, integer (0 if no-cook)
    difficulty: 'easy',                        // 'easy' | 'medium' | 'hard'
    spice: 0,                                  // 0 none, 1 mild, 2 medium, 3 hot
    diets: ['vegetarian'],                     // any of: vegetarian, vegan, gluten-free, dairy-free, low-carb, high-protein  (only if TRUE for the recipe as written)
    allergens: ['gluten', 'dairy', 'egg'],     // FDA major 9 that the recipe CONTAINS: milk→'dairy', 'egg', 'fish', 'shellfish', 'tree-nuts', 'peanuts', 'gluten' (wheat), 'soy', 'sesame'
    nutrition: { calories: 320, protein: 9, carbs: 45, fat: 11 }, // per serving; integers; reasonable estimates
    ingredients: [
      // qty: number or null (null for "to taste"). Use decimals: 0.25, 0.333, 0.5, 0.667, 0.75, 1.5
      // unit: one of the UNITS below, or null for countable items ("2 eggs")
      // item: lowercase ingredient name;  note: optional prep note
      // group: optional sub-heading, e.g. 'For the glaze'
      { qty: 2, unit: 'cup', item: 'all-purpose flour', note: 'spooned and leveled' },
      { qty: 2, unit: null, item: 'large eggs' },
      { qty: null, unit: null, item: 'maple syrup', note: 'for serving' },
    ],
    steps: [
      // text: one clear instruction (original wording, US home-cook style, Fahrenheit temps)
      // timer: optional integer minutes if the step involves waiting/cooking a set time
      { text: 'Whisk the flour, sugar, baking powder, baking soda and salt in a large bowl.' },
      { text: 'Cook until bubbles form on the surface, about 2 to 3 minutes.', timer: 3 },
    ],
    tips: ['Do not overmix — a few lumps keep the pancakes tender.'], // 1–3 tips
    tags: ['comfort food', 'weekend'],         // 2–5 lowercase free-form tags
  },
];
export default recipes;
```

## Allowed UNITS
`tsp`, `tbsp`, `cup`, `fl oz`, `pint`, `quart`, `gallon`, `oz`, `lb`, `g`, `kg`, `ml`, `l`,
`pinch`, `dash`, `clove`, `slice`, `can`, `stick`, `package`, `bunch`, `sprig`, `inch`, `head`, `stalk`

Use US customary units (cups, tbsp, oz, lb, °F) — the app converts to metric automatically.

## Rules
- All text must be ORIGINAL wording (do not copy recipes from websites/cookbooks).
- Food-safety: include safe internal temperatures for meat/poultry/seafood/eggs where relevant
  (USDA: poultry 165°F, ground meat 160°F, whole cuts of beef/pork/lamb 145°F + 3 min rest, fish 145°F).
- Accurate allergen tagging is critical — when in doubt, include the allergen.
- `diets` must be strictly true (e.g. 'vegan' means no meat, fish, dairy, egg, honey).
