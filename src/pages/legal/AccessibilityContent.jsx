// NOTE: Template provided for convenience; not legal advice. Have a qualified attorney review before launch.
import { SITE } from '../../config/site.js';

export default function AccessibilityContent() {
  return (
    <>
      <h2>Our Commitment</h2>
      <p>
        {SITE.operator} is committed to making {SITE.name} usable by everyone, including people with
        disabilities. We aim to conform to the{' '}
        <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">
          Web Content Accessibility Guidelines (WCAG) 2.1
        </a>{' '}
        at Level AA, which are widely recognized as the standard for accessible websites under the
        Americans with Disabilities Act (ADA). Accessibility is an ongoing effort, and we continue to
        test and improve the Site.
      </p>

      <h2>Measures We Have Taken</h2>
      <ul>
        <li>
          <strong>Keyboard navigation:</strong> all features, including turning pages, timers, and
          menus, can be operated with a keyboard, and a “skip to content” link is provided.
        </li>
        <li>
          <strong>Visible focus indicators:</strong> interactive elements display a clear focus
          outline when navigated by keyboard.
        </li>
        <li>
          <strong>Text alternatives:</strong> meaningful images have descriptive alt text, decorative
          textures are hidden from assistive technology, and icon-only buttons have accessible labels.
        </li>
        <li>
          <strong>Semantic structure:</strong> pages use headings, lists, landmarks, and ARIA
          attributes so screen readers can navigate them efficiently.
        </li>
        <li>
          <strong>Reduced motion:</strong> when your device is set to reduce motion, page-turn
          animations and other non-essential motion are disabled.
        </li>
        <li>
          <strong>Color contrast:</strong> text and essential interface elements are designed to meet
          WCAG AA contrast ratios, and information is not conveyed by color alone.
        </li>
        <li>
          <strong>Scalable text:</strong> the layout supports browser zoom and larger text settings
          without loss of content or functionality.
        </li>
        <li>
          <strong>High-contrast night theme:</strong> a darker, higher-contrast theme is available in
          Settings for low-light kitchens and readers who prefer it.
        </li>
      </ul>

      <h2>Known Limitations</h2>
      <ul>
        <li>
          <strong>Textured visuals:</strong> the Site’s skeuomorphic leather-and-paper design uses
          background textures and decorative typography. While we work to keep text contrast high,
          some users may find the textured backgrounds visually busy. The night theme offers a
          simpler, higher-contrast alternative.
        </li>
        <li>
          <strong>Page-turn animations:</strong> animated page turns are part of the book experience.
          They are automatically disabled when your device’s reduced-motion setting is turned on.
        </li>
        <li>
          <strong>User-added content:</strong> recipes and notes you add yourself may not include
          accessibility features, such as image descriptions, unless you add them.
        </li>
      </ul>

      <h2>Compatibility</h2>
      <p>
        The Site is designed to work with current versions of major browsers, including Chrome,
        Edge, Firefox, and Safari, and with common assistive technologies such as screen readers,
        screen magnifiers, and voice control software.
      </p>

      <h2>Feedback and Assistance</h2>
      <p>
        If you encounter an accessibility barrier, have trouble using any part of the Site, or need
        information in an alternative format, please contact us. Let us know the page or feature
        involved, a description of the problem, and the browser and assistive technology you use.
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </li>
        <li>Mail: {SITE.mailingAddress}</li>
      </ul>
      <p>
        We aim to respond to accessibility feedback within <strong>5 business days</strong> and to
        provide the information or a reasonable alternative as quickly as possible.
      </p>
    </>
  );
}
