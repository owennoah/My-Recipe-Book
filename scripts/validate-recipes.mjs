// Validates all recipe files against the schema. Run: npm run validate:recipes
import { readdir } from 'node:fs/promises';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import { CATEGORIES, MEAL_TYPES, DIETS, ALLERGENS, DIFFICULTIES, UNITS } from '../src/data/categories.js';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'recipes');
const only = process.argv.slice(2).map((a) => a.replace(/\.js$/, ''));
const files = (await readdir(dir))
  .filter((f) => f.endsWith('.js') && f !== 'index.js')
  .filter((f) => !only.length || only.includes(f.replace('.js', '')));
const errors = [];
const ids = new Set();
let total = 0;
const catIds = new Set(CATEGORIES.map((c) => c.id));

const isInt = (n) => Number.isInteger(n) && n >= 0;

for (const file of files) {
  const cat = file.replace('.js', '');
  if (!catIds.has(cat)) errors.push(`${file}: unknown category file`);
  let mod;
  try {
    mod = await import(pathToFileURL(path.join(dir, file)).href);
  } catch (err) {
    errors.push(`${file}: failed to load — ${err.message}`);
    continue;
  }
  const list = mod.default;
  if (!Array.isArray(list)) { errors.push(`${file}: default export is not an array`); continue; }
  for (const r of list) {
    total++;
    const where = `${file} › ${r.id || '(no id)'}`;
    const e = (m) => errors.push(`${where}: ${m}`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id || '')) e('bad id');
    if (ids.has(r.id)) e('duplicate id'); ids.add(r.id);
    for (const k of ['title', 'description', 'region', 'emoji']) if (typeof r[k] !== 'string' || !r[k]) e(`missing ${k}`);
    if (r.category !== cat) e(`category "${r.category}" != file "${cat}"`);
    if (!Array.isArray(r.mealTypes) || !r.mealTypes.length || r.mealTypes.some((m) => !MEAL_TYPES.includes(m))) e('bad mealTypes');
    for (const k of ['servings', 'prepTime', 'cookTime']) if (!isInt(r[k])) e(`bad ${k}`);
    if (r.servings < 1) e('servings < 1');
    if (!DIFFICULTIES.includes(r.difficulty)) e('bad difficulty');
    if (![0, 1, 2, 3].includes(r.spice)) e('bad spice');
    if (!Array.isArray(r.diets) || r.diets.some((d) => !DIETS.includes(d))) e('bad diets');
    if (!Array.isArray(r.allergens) || r.allergens.some((a) => !ALLERGENS.includes(a))) e('bad allergens');
    const n = r.nutrition || {};
    for (const k of ['calories', 'protein', 'carbs', 'fat']) if (!isInt(n[k])) e(`bad nutrition.${k}`);
    if (!Array.isArray(r.ingredients) || r.ingredients.length < 2) e('too few ingredients');
    for (const i of r.ingredients || []) {
      if (!(i.qty === null || (typeof i.qty === 'number' && i.qty > 0))) e(`bad qty for "${i.item}"`);
      if (!(i.unit === null || UNITS.includes(i.unit))) e(`bad unit "${i.unit}" for "${i.item}"`);
      if (typeof i.item !== 'string' || !i.item) e('ingredient missing item');
    }
    if (!Array.isArray(r.steps) || r.steps.length < 2) e('too few steps');
    for (const s of r.steps || []) {
      if (typeof s.text !== 'string' || !s.text) e('step missing text');
      if (s.timer !== undefined && !(Number.isInteger(s.timer) && s.timer > 0)) e(`bad timer in step "${s.text?.slice(0, 30)}"`);
    }
    if (!Array.isArray(r.tips)) e('tips must be array');
    if (!Array.isArray(r.tags)) e('tags must be array');
    // Allergen sanity checks
    if (r.diets.includes('vegan') && r.allergens.some((a) => ['dairy', 'egg', 'fish', 'shellfish'].includes(a))) e('vegan but has animal allergen');
    if (r.diets.includes('dairy-free') && r.allergens.includes('dairy')) e('dairy-free but contains dairy');
    if (r.diets.includes('gluten-free') && r.allergens.includes('gluten')) e('gluten-free but contains gluten');
  }
}

console.log(`Checked ${total} recipes in ${files.length} files.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n` + errors.map((x) => ' - ' + x).join('\n'));
  process.exit(1);
}
console.log('All recipes valid ✔');
