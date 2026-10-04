export const CATEGORIES = [
  { id: 'breakfast', name: 'Breakfast & Brunch', emoji: '🍳', blurb: 'Diner stacks, skillets and lazy Sunday bakes.' },
  { id: 'southern', name: 'Southern Comfort', emoji: '🍗', blurb: 'Fried, smothered and slow-simmered favorites.' },
  { id: 'bbq', name: 'BBQ & Grilling', emoji: '🔥', blurb: 'Backyard smoke, ribs and summer cookouts.' },
  { id: 'sandwiches', name: 'Burgers & Sandwiches', emoji: '🍔', blurb: 'Stacked, pressed and griddled lunch-counter classics.' },
  { id: 'soups', name: 'Soups, Stews & Chili', emoji: '🍲', blurb: 'One-pot bowls for cold nights.' },
  { id: 'salads', name: 'Salads & Bowls', emoji: '🥗', blurb: 'Fresh, crunchy and steakhouse-style plates.' },
  { id: 'pasta', name: 'Italian-American', emoji: '🍝', blurb: 'Red-sauce joint pastas and bakes.' },
  { id: 'texmex', name: 'Tex-Mex & Southwest', emoji: '🌮', blurb: 'Tacos, enchiladas and border-town flavor.' },
  { id: 'seafood', name: 'Seafood', emoji: '🦞', blurb: 'From New England shacks to Gulf Coast boils.' },
  { id: 'sides', name: 'Sides & Holiday', emoji: '🥧', blurb: 'Thanksgiving table staples and potluck sides.' },
  { id: 'desserts', name: 'Desserts & Baking', emoji: '🍰', blurb: 'Pies, cookies and bake-sale treasures.' },
  { id: 'appetizers', name: 'Game Day & Drinks', emoji: '🏈', blurb: 'Dips, wings and something to sip.' },
];

export const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'side', 'snack', 'dessert', 'drink'];
export const DIETS = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'low-carb', 'high-protein'];
export const ALLERGENS = ['dairy', 'egg', 'fish', 'shellfish', 'tree-nuts', 'peanuts', 'gluten', 'soy', 'sesame'];
export const DIFFICULTIES = ['easy', 'medium', 'hard'];
export const UNITS = [
  'tsp', 'tbsp', 'cup', 'fl oz', 'pint', 'quart', 'gallon', 'oz', 'lb', 'g', 'kg', 'ml', 'l',
  'pinch', 'dash', 'clove', 'slice', 'can', 'stick', 'package', 'bunch', 'sprig', 'inch', 'head', 'stalk',
];

export const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
