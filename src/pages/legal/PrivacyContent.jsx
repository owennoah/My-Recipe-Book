// NOTE: Template provided for convenience; not legal advice. Have a qualified attorney review before launch.
import { SITE } from '../../config/site.js';

export default function PrivacyContent() {
  return (
    <>
      <h2>Overview</h2>
      <p>
        This Privacy Policy explains how {SITE.operator} (“we,” “us,” or “our”) handles information
        when you use {SITE.name} at <a href={SITE.url}>{SITE.url}</a> (the “Site”). The short
        version: <strong>we do not collect, sell, or share your personal information.</strong> The
        Site has no user accounts, no backend database, no analytics, no advertising, no tracking
        pixels, and no third-party scripts. Everything you save in the Site stays on your own device.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not ask you for your name, email address, phone number, location, or any other
        personal information to use the Site. We do not operate a server or database that stores
        information about you or what you do in the Site.
      </p>
      <p>
        If you choose to contact us by email, we will receive your email address and whatever
        information you include in your message. We use that information only to respond to you and
        keep a record of the correspondence.
      </p>

      <h2>Information Stored on Your Device</h2>
      <p>
        The Site uses your browser’s <strong>localStorage</strong> to remember things you create or
        choose, such as:
      </p>
      <ul>
        <li>Favorite recipes and recently viewed recipes</li>
        <li>Recipes you add yourself and personal notes</li>
        <li>Your shopping list and meal plan</li>
        <li>Settings such as theme and measurement units</li>
      </ul>
      <p>
        This information is stored <strong>only in your browser on your device</strong>. It is never
        transmitted to us, and we cannot see, access, or recover it. You can delete it at any time
        using <strong>Settings → “Erase all my data”</strong> in the Site, or by clearing your
        browser’s site data. For details, see our <a href="/cookies">Cookies &amp; Local Storage
        Notice</a>.
      </p>
      <p>
        If you use the export feature, the Site creates a JSON backup file that is saved to your
        device. If you import a backup file, it is read and processed locally in your browser. Backup
        files are never uploaded to us. Please keep any exported files secure, as they may contain
        your personal notes.
      </p>

      <h2>Offline Caching and Browser Features</h2>
      <p>
        The Site uses a service worker to cache its own application files (such as code, images, and
        fonts) so it can work offline. This cache does not contain personal information.
      </p>
      <p>
        Some optional features use built-in browser capabilities that run entirely on your device,
        such as the Screen Wake Lock API (to keep your screen on in Cook Mode) and audio playback (for
        kitchen timer alerts). These features do not send any information to us.
      </p>

      <h2>Hosting Provider and Server Logs</h2>
      <p>
        The Site is hosted by Vercel Inc. Like virtually all web hosts, Vercel automatically
        processes standard technical information when your browser requests pages from the Site,
        including your IP address, browser user agent, requested URL, and timestamps. This
        information is used for security, abuse prevention, and reliable delivery of the Site. We do
        not use these logs to identify you or build a profile about you. Vercel’s handling of this
        information is described in the{' '}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Vercel Privacy Policy
        </a>
        .
      </p>
      <p>
        The Site’s fonts and other assets are self-hosted, so loading the Site does not send requests
        to third-party font or content providers.
      </p>

      <h2>Cookies, Analytics, and Advertising</h2>
      <p>
        The Site does not set cookies. We do not use analytics tools, advertising networks,
        social-media plugins, or tracking pixels, and we do not engage in targeted (cross-context
        behavioral) advertising.
      </p>

      <h2>No Sale or Sharing of Personal Information</h2>
      <p>
        We do not sell your personal information, and we do not share it for cross-context
        behavioral advertising. We have not done so in the preceding 12 months. We do not use or
        disclose sensitive personal information.
      </p>

      <h2>Global Privacy Control</h2>
      <p>
        We honor Global Privacy Control (GPC) and similar browser-based opt-out preference signals as
        a valid request to opt out of the sale or sharing of personal information. Because we do not
        sell or share personal information in the first place, no further action is required on your
        part.
      </p>

      <h2>California Privacy Rights (CCPA/CPRA)</h2>
      <p>
        If you are a California resident, the California Consumer Privacy Act, as amended by the
        California Privacy Rights Act, gives you certain rights regarding your personal information.
      </p>
      <h3>Categories of Information</h3>
      <p>
        In the preceding 12 months, the only categories of personal information that may have been
        processed in connection with the Site are: <strong>identifiers and internet activity
        information</strong> (IP address, user agent, and request data in hosting logs, processed by
        our service provider for security and delivery), and <strong>identifiers and the contents of
        communications</strong> if you email us. We do not collect this information for commercial
        purposes beyond operating the Site and responding to you.
      </p>
      <h3>Your Rights</h3>
      <ul>
        <li>
          <strong>Right to know and access:</strong> request the categories and specific pieces of
          personal information we hold about you.
        </li>
        <li>
          <strong>Right to delete:</strong> request deletion of personal information we hold about
          you.
        </li>
        <li>
          <strong>Right to correct:</strong> request correction of inaccurate personal information.
        </li>
        <li>
          <strong>Right to opt out of sale or sharing:</strong> we do not sell or share personal
          information.
        </li>
        <li>
          <strong>Right to limit use of sensitive personal information:</strong> we do not collect
          sensitive personal information.
        </li>
        <li>
          <strong>Right to non-discrimination:</strong> we will not treat you differently for
          exercising any of your privacy rights.
        </li>
      </ul>
      <h3>Do Not Sell or Share My Personal Information</h3>
      <p>
        <strong>We do not sell or share your personal information</strong>, as those terms are
        defined under California law, and we have no actual knowledge of selling or sharing the
        personal information of consumers under 16 years of age.
      </p>
      <h3>How to Submit a Request</h3>
      <p>
        Email us at <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. We may need to
        verify your identity before responding, and you may use an authorized agent to submit a
        request on your behalf. Please note that data stored in your browser’s localStorage is never
        sent to us, so we cannot access, export, or delete it for you. You can manage it directly in
        the Site’s Settings page.
      </p>

      <h2>Other U.S. State Privacy Rights</h2>
      <p>
        Residents of states with comprehensive consumer privacy laws, including Virginia, Colorado,
        Connecticut, Utah, Texas, Oregon, Montana, Iowa, Delaware, Florida, Tennessee, Indiana, New
        Hampshire, New Jersey, Nebraska, Kentucky, Minnesota, Maryland, Rhode Island, and others, may
        have rights to confirm whether we process their personal data, access it, correct it, delete
        it, obtain a portable copy, and opt out of targeted advertising, the sale of personal data, and
        profiling in furtherance of decisions that produce legal or similarly significant effects.
      </p>
      <p>
        We do not engage in targeted advertising, sell personal data, or conduct such profiling. To
        exercise any applicable right, email us at{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. We will respond within the
        time required by applicable law (generally 45 days). If we decline to act on your request, you
        may appeal by replying to our response with the subject line “Privacy Appeal,” and we will
        respond to your appeal within the time required by law. If your appeal is denied, you may
        contact your state Attorney General.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        The Site is not directed to children under 13, and we do not knowingly collect personal
        information from children under 13, consistent with the Children’s Online Privacy Protection
        Act (COPPA). If you believe a child under 13 has sent us personal information by email, please
        contact us and we will delete it.
      </p>

      <h2>Data Security</h2>
      <p>
        The Site is served exclusively over encrypted HTTPS connections. Because your recipes, notes,
        and settings are stored on your device, their security also depends on the security of your
        device and browser. We recommend keeping your device and browser up to date and protecting
        any exported backup files. No method of transmission or storage is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>Data Retention</h2>
      <ul>
        <li>
          <strong>Local data:</strong> remains in your browser until you erase it in Settings, clear
          your browser data, or your browser removes it.
        </li>
        <li>
          <strong>Hosting logs:</strong> retained by our hosting provider for a limited period in
          accordance with its own policies.
        </li>
        <li>
          <strong>Emails:</strong> retained only as long as reasonably necessary to respond to you
          and maintain records, after which they are deleted.
        </li>
      </ul>

      <h2>International Users</h2>
      <p>
        The Site is operated from and intended for users in the United States. If you access it from
        outside the United States, any information processed in connection with your use (such as
        hosting logs) may be processed in the United States or other countries where our hosting
        provider operates, where data protection laws may differ from those in your country.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the “Last
        updated” date on this page. If we make material changes, such as beginning to collect new
        types of information, we will provide a prominent notice on the Site before the change takes
        effect.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or wish to exercise your privacy rights,
        please contact {SITE.operator}:
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </li>
        <li>Mail: {SITE.mailingAddress}</li>
      </ul>
    </>
  );
}
