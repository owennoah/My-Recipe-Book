// NOTE: Template provided for convenience; not legal advice. Have a qualified attorney review before launch.
import { SITE } from '../../config/site.js';

export default function CookiesContent() {
  return (
    <>
      <h2>We Do Not Use Cookies</h2>
      <p>
        {SITE.name} does not set any cookies, first-party or third-party. We do not use analytics,
        advertising, social-media, or tracking cookies, and there are no tracking pixels or
        third-party scripts on the Site. Because of this, you will not see a cookie consent banner.
      </p>

      <h2>How We Use Local Storage</h2>
      <p>
        To remember your favorites, recipes, and preferences without accounts or servers, the Site
        uses your browser’s <strong>localStorage</strong>. This data is stored only on your device,
        is never sent to us, and is not used to track you. All keys use the prefix{' '}
        <strong>sas:</strong> so they are easy to identify.
      </p>
      <ul>
        <li>
          <strong>sas:favorites</strong> — the recipes you have marked as favorites.
        </li>
        <li>
          <strong>sas:userRecipes</strong> — recipes you have added or written yourself.
        </li>
        <li>
          <strong>sas:notes</strong> — your personal notes attached to recipes.
        </li>
        <li>
          <strong>sas:shopping</strong> — your shopping list items and checked-off status.
        </li>
        <li>
          <strong>sas:planner</strong> — your weekly meal plan.
        </li>
        <li>
          <strong>sas:settings</strong> — preferences such as theme (day or night) and measurement
          units.
        </li>
        <li>
          <strong>sas:recent</strong> — recipes you have recently viewed, for quick access.
        </li>
      </ul>
      <p>
        Each item is kept until you delete it. It is strictly necessary to provide the features you
        choose to use, and none of it is shared with anyone.
      </p>

      <h2>Service Worker Cache</h2>
      <p>
        The Site uses a service worker to store a copy of its own application files, such as code,
        styles, images, and self-hosted fonts, in your browser’s cache storage. This lets the Site
        load quickly and work offline. The cache contains no personal information and is updated
        automatically when a new version of the Site is released.
      </p>

      <h2>Hosting Logs</h2>
      <p>
        Our hosting provider, Vercel Inc., processes standard server request logs (such as IP address,
        user agent, and timestamps) for security and delivery. This does not involve cookies on your
        device. For more information, see our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>How to Clear Your Data</h2>
      <ul>
        <li>
          <strong>In the Site:</strong> open <strong>Settings</strong> and choose{' '}
          <strong>“Erase all my data.”</strong> This removes every sas: item from your browser’s
          local storage on that device.
        </li>
        <li>
          <strong>In your browser:</strong> clear site data (sometimes called “cookies and site data”
          or “website data”) for this Site in your browser’s privacy settings. This removes local
          storage and the offline cache.
        </li>
        <li>
          <strong>Back up first:</strong> erasing data is permanent, and we cannot recover it. Use the
          export feature in Settings if you want to keep a backup file.
        </li>
      </ul>
      <p>
        Data is stored separately for each browser and device, so you will need to clear it on each
        one you have used.
      </p>

      <h2>Changes and Contact</h2>
      <p>
        If we ever begin using cookies or similar technologies, we will update this notice and our
        Privacy Policy before doing so. Questions can be sent to{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </>
  );
}
