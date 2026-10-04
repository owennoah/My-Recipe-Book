// NOTE: Template provided for convenience; not legal advice. Have a qualified attorney review before launch.
import { SITE } from '../../config/site.js';

export default function DisclaimerContent() {
  return (
    <>
      <h2>General Information Only</h2>
      <p>
        The recipes, cooking tips, nutrition figures, allergen tags, and other information in{' '}
        {SITE.name} are provided for general informational and entertainment purposes only. They are
        <strong> not medical, nutritional, or dietary advice</strong> and are not a substitute for
        advice from a physician, registered dietitian, or other qualified health professional. If you
        have a medical condition, food allergy, or special dietary need, or are pregnant, nursing,
        elderly, or immunocompromised, consult a qualified professional before relying on any
        information on this Site.
      </p>

      <h2>Nutrition Information Is Estimated</h2>
      <p>
        Any nutrition values shown (such as calories, fat, carbohydrates, protein, and sodium) are{' '}
        <strong>estimates</strong> calculated from typical ingredient data. Actual values will vary
        depending on the specific brands and products you use, ingredient substitutions, portion
        sizes, preparation and cooking methods, and other factors. Do not rely on these figures for
        managing a medical condition, such as diabetes, or for any purpose that requires precise
        nutritional data.
      </p>

      <h2>Food Allergies and Cross-Contamination</h2>
      <p>
        Allergen tags are provided as a convenience and <strong>may be incomplete or
        inaccurate</strong>. Under U.S. law, the Food and Drug Administration (FDA) recognizes nine
        major food allergens:
      </p>
      <ul>
        <li>Milk</li>
        <li>Eggs</li>
        <li>Fish</li>
        <li>Crustacean shellfish</li>
        <li>Tree nuts</li>
        <li>Peanuts</li>
        <li>Wheat</li>
        <li>Soybeans</li>
        <li>Sesame</li>
      </ul>
      <p>
        Packaged ingredients can contain hidden allergens or be processed in facilities that handle
        allergens, and formulations change without notice. <strong>Always read the labels on every
        ingredient you use</strong>, and take steps to prevent cross-contact in your kitchen by
        cleaning surfaces, utensils, cookware, and hands thoroughly. If you or someone you are
        cooking for has a food allergy, you are responsible for confirming that every ingredient is
        safe.
      </p>

      <h2>Safe Minimum Internal Temperatures</h2>
      <p>
        Use a food thermometer to check that foods reach these safe minimum internal temperatures
        recommended by the U.S. Department of Agriculture (USDA). Measure in the thickest part of the
        food, away from bone, fat, and gristle. Recipe cooking times are guides only; the
        thermometer reading is what matters.
      </p>
      <ul>
        <li>
          <strong>Poultry</strong> (chicken, turkey, duck, whole, parts, or ground):{' '}
          <strong>165°F (74°C)</strong>
        </li>
        <li>
          <strong>Ground meats</strong> (beef, pork, veal, lamb): <strong>160°F (71°C)</strong>
        </li>
        <li>
          <strong>Beef, pork, veal, and lamb</strong> steaks, chops, and roasts:{' '}
          <strong>145°F (63°C)</strong>, followed by a <strong>3-minute rest</strong>
        </li>
        <li>
          <strong>Fish and shellfish:</strong> <strong>145°F (63°C)</strong>, or until flesh is
          opaque and separates easily with a fork
        </li>
        <li>
          <strong>Egg dishes</strong> (casseroles, quiches, stratas): <strong>160°F (71°C)</strong>
        </li>
        <li>
          <strong>Leftovers and casseroles</strong> (reheated): <strong>165°F (74°C)</strong>
        </li>
      </ul>
      <p>
        Refrigerate perishable foods within 2 hours of cooking (within 1 hour if the temperature is
        above 90°F), and keep cold foods at or below 40°F.
      </p>

      <h2>Raw and Undercooked Foods</h2>
      <p>
        <strong>
          Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your
          risk of foodborne illness,
        </strong>{' '}
        especially for young children, older adults, pregnant people, and anyone with a weakened
        immune system. Some recipes may call for items such as rare meat, runny eggs, raw dough, or
        raw seafood. If you are in a higher-risk group, consider pasteurized eggs or cooking foods to
        the safe temperatures listed above. Wash produce thoroughly and avoid cross-contaminating
        ready-to-eat foods with raw meat juices.
      </p>

      <h2>Alcohol</h2>
      <p>
        Some recipes include beer, wine, spirits, or other alcohol. Cooking does not necessarily
        remove all alcohol. Recipes containing alcohol are intended only for adults of legal drinking
        age (21 or older in the United States). Please drink responsibly, never drink and drive, and
        avoid alcohol if you are pregnant, taking medications that interact with alcohol, or have
        been advised by a health professional to avoid it.
      </p>

      <h2>Kitchen and Outdoor Cooking Safety</h2>
      <ul>
        <li>
          <strong>Knives and tools:</strong> keep knives sharp, cut away from your body, use a stable
          cutting board, and follow manufacturer instructions for all appliances.
        </li>
        <li>
          <strong>Hot oil and frying:</strong> never leave hot oil unattended, keep it well below its
          smoke point, add food slowly to avoid splatter, and never use water on a grease fire. Cover
          the pan with a lid and turn off the heat, or use a Class K or Class B fire extinguisher.
        </li>
        <li>
          <strong>Grills, smokers, and open flame:</strong> use them outdoors only, in well-ventilated
          areas away from structures and overhangs, and never leave them unattended. Charcoal and
          propane produce carbon monoxide, which can be deadly in enclosed spaces.
        </li>
        <li>
          <strong>Burns and steam:</strong> use oven mitts, open lids away from you, and keep pot
          handles turned inward.
        </li>
        <li>
          <strong>Children:</strong> supervise children closely in the kitchen and around grills.
        </li>
      </ul>

      <h2>Results May Vary</h2>
      <p>
        Cooking results depend on many factors outside our control, including your equipment,
        altitude, ingredient quality, and technique. We make no guarantee that any recipe will turn
        out as described. You use the recipes and information on this Site at your own risk and are
        responsible for exercising good judgment. See our <a href="/terms">Terms of Service</a> for
        additional disclaimers and limitations of liability.
      </p>

      <h2>More Food Safety Resources</h2>
      <p>
        For authoritative, up-to-date food safety guidance from the U.S. government, visit{' '}
        <a href="https://www.foodsafety.gov" target="_blank" rel="noopener noreferrer">
          FoodSafety.gov
        </a>
        .
      </p>

      <h2>Questions</h2>
      <p>
        If you notice an error in a recipe, an allergen tag, or a temperature, please let us know at{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> so we can correct it.
      </p>
    </>
  );
}
