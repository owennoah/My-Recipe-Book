// NOTE: Template provided for convenience; not legal advice. Have a qualified attorney review before launch.
import { SITE } from '../../config/site.js';

export default function TermsContent() {
  return (
    <>
      <h2>1. Acceptance of These Terms</h2>
      <p>
        These Terms of Service (the “Terms”) are a legal agreement between you and {SITE.operator}{' '}
        (“we,” “us,” or “our”) governing your use of {SITE.name} at{' '}
        <a href={SITE.url}>{SITE.url}</a> (the “Site”). By accessing or using the Site, you agree to
        these Terms and to our <a href="/privacy">Privacy Policy</a>. If you do not agree, please do
        not use the Site.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 13 years old to use the Site. If you are under 18, or under the age of
        majority where you live, you may use the Site only with the involvement and consent of a
        parent or legal guardian, who agrees to these Terms on your behalf. Cooking involves heat,
        sharp tools, and other hazards, so minors should cook only under adult supervision.
      </p>

      <h2>3. License to Use the Site</h2>
      <p>
        Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable,
        revocable license to access and use the Site for your own personal, non-commercial purposes.
        You may print or save individual recipes for personal use. You may not otherwise copy,
        reproduce, republish, sell, or distribute content from the Site without our prior written
        permission.
      </p>

      <h2>4. Your Content</h2>
      <p>
        The Site lets you add your own recipes, notes, shopping lists, meal plans, and similar
        content (“Your Content”). Your Content is stored only in your browser’s local storage on your
        device. It is not uploaded to us, and we cannot view, back up, or recover it.
      </p>
      <ul>
        <li>
          <strong>You keep ownership.</strong> You retain all rights you have in Your Content. Because
          we never receive it, you grant us no license to it.
        </li>
        <li>
          <strong>You are responsible for it.</strong> You are solely responsible for Your Content,
          including its accuracy, legality, and safety, and for keeping your own backups using the
          export feature.
        </li>
        <li>
          <strong>Respect others’ rights.</strong> Do not add content, such as recipes, text, or
          images copied from cookbooks, websites, or other sources, that you do not have the right to
          use. See our <a href="/dmca">Copyright &amp; DMCA Policy</a>.
        </li>
      </ul>
      <p>
        Data may be lost if you clear your browser data, use private browsing, switch devices or
        browsers, or if your browser removes stored data. We are not responsible for any loss of Your
        Content.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site in violation of any applicable law or regulation;</li>
        <li>Infringe the intellectual property or other rights of anyone else;</li>
        <li>
          Attempt to interfere with, disrupt, overload, or gain unauthorized access to the Site, its
          hosting infrastructure, or related systems;
        </li>
        <li>
          Use bots, scrapers, or other automated means to copy or harvest content from the Site in
          bulk;
        </li>
        <li>
          Reverse engineer, decompile, or attempt to extract source code, except to the extent such
          restriction is prohibited by law;
        </li>
        <li>Introduce viruses, malware, or other harmful code; or</li>
        <li>Misrepresent your affiliation with us or use the Site to mislead others.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        The Site and its contents, including the built-in recipes, text, illustrations, design,
        graphics, layout, the “{SITE.name}” name and logo, and the underlying software, are owned by
        or licensed to {SITE.operator} and are protected by United States and international copyright,
        trademark, and other laws. Except for the limited license in Section 3, no rights are granted
        to you. All rights not expressly granted are reserved.
      </p>
      <p>
        If you send us feedback or suggestions, you agree that we may use them without restriction or
        compensation to you.
      </p>

      <h2>7. Recipes, Food Safety, Allergies, and Nutrition</h2>
      <p>
        Recipes and related information on the Site are provided for general informational and
        entertainment purposes only. Nutrition values are estimates, allergen tags may be incomplete,
        and nothing on the Site is medical, nutritional, or dietary advice. You are responsible for
        verifying ingredients, checking for allergens, following safe food-handling practices, and
        cooking foods to safe internal temperatures. Please read our full{' '}
        <a href="/disclaimer">Food Safety, Allergy &amp; Nutrition Disclaimer</a>, which is
        incorporated into these Terms.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        <strong>
          THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY
          KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
          WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, TITLE, NON-INFRINGEMENT, AND ACCURACY.
        </strong>{' '}
        We do not warrant that the Site will be uninterrupted, error-free, or secure, that recipes will
        produce any particular result, or that any information (including nutrition and allergen
        information) is complete, accurate, or current. Some jurisdictions do not allow the exclusion
        of implied warranties, so some of the above exclusions may not apply to you.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        <strong>
          TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL {SITE.operator.toUpperCase()} OR
          ITS OWNERS, AFFILIATES, OR CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, PROFITS, OR
          GOODWILL, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SITE OR ANY
          CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER
          LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </strong>
      </p>
      <p>
        <strong>
          OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SITE WILL NOT EXCEED ONE HUNDRED U.S.
          DOLLARS (US$100).
        </strong>{' '}
        Because the Site is provided free of charge, you agree these limitations are a reasonable
        allocation of risk. Some jurisdictions do not allow certain limitations of liability, so some
        of these limitations may not apply to you. Nothing in these Terms limits liability that cannot
        be limited under applicable law.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        To the extent permitted by law, you agree to defend, indemnify, and hold harmless{' '}
        {SITE.operator} and its owners, affiliates, and contributors from any claims, liabilities,
        damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or
        related to your misuse of the Site, Your Content, or your violation of these Terms or of
        anyone else’s rights.
      </p>

      <h2>11. Dispute Resolution and Governing Law</h2>
      <h3>Informal Resolution First</h3>
      <p>
        Most concerns can be resolved quickly. Before filing any claim, you agree to first contact us
        at <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> with a description of the
        issue and the relief you are seeking. Both parties agree to try in good faith to resolve the
        dispute informally for at least 30 days before starting a formal proceeding.
      </p>
      <h3>Governing Law and Venue</h3>
      <p>
        These Terms and any dispute arising out of or relating to them or the Site are governed by the
        laws of the State of {SITE.governingState} and applicable federal law of the United States,
        without regard to conflict-of-law principles. Any dispute not resolved informally will be
        brought exclusively in the state or federal courts located in the State of{' '}
        {SITE.governingState}, and you and we consent to the personal jurisdiction of those courts.
        Either party may bring an individual claim in small-claims court where eligible.
      </p>

      <h2>12. Severability and Entire Agreement</h2>
      <p>
        If any provision of these Terms is found unenforceable, it will be enforced to the maximum
        extent permissible and the remaining provisions will remain in full effect. Our failure to
        enforce any provision is not a waiver. These Terms, together with the Privacy Policy and the
        other policies linked here, are the entire agreement between you and us regarding the Site.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise the “Last updated”
        date on this page, and for material changes we will provide a prominent notice on the Site.
        Changes take effect when posted. Your continued use of the Site after changes are posted
        means you accept the updated Terms.
      </p>

      <h2>14. Termination</h2>
      <p>
        You may stop using the Site at any time and erase your local data from the Settings page. We
        may modify, suspend, or discontinue the Site, or restrict your access to it, at any time and
        without notice. Sections that by their nature should survive termination, including Sections
        4 and 6 through 12, will survive.
      </p>

      <h2>15. Contact</h2>
      <p>Questions about these Terms can be sent to {SITE.operator}:</p>
      <ul>
        <li>
          Email: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </li>
        <li>Mail: {SITE.mailingAddress}</li>
      </ul>
    </>
  );
}
