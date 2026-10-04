// NOTE: Template provided for convenience; not legal advice. Have a qualified attorney review before launch.
import { SITE } from '../../config/site.js';

export default function DmcaContent() {
  return (
    <>
      <h2>Our Content</h2>
      <p>
        The built-in recipes, text, illustrations, and design of {SITE.name} are original works owned
        by or licensed to {SITE.operator}. We respect the intellectual property rights of others and
        expect users of the Site to do the same. Recipes and notes that users add are stored only in
        their own browsers and are not published or visible to anyone else, but users must not add
        content they do not have the right to use.
      </p>

      <h2>Reporting Copyright Infringement</h2>
      <p>
        If you believe that material appearing on the Site infringes your copyright, you may send a
        written notice under the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512(c)(3), to
        our designated agent listed below. Your notice must include:
      </p>
      <ul>
        <li>
          A physical or electronic signature of the copyright owner or a person authorized to act on
          the owner’s behalf;
        </li>
        <li>
          Identification of the copyrighted work claimed to be infringed, or, if multiple works are
          covered by a single notice, a representative list of such works;
        </li>
        <li>
          Identification of the material claimed to be infringing, with information reasonably
          sufficient for us to locate it, such as the page URL;
        </li>
        <li>Your name, mailing address, telephone number, and email address;</li>
        <li>
          A statement that you have a good-faith belief that use of the material in the manner
          complained of is not authorized by the copyright owner, its agent, or the law; and
        </li>
        <li>
          A statement that the information in the notice is accurate and, under penalty of perjury,
          that you are the copyright owner or authorized to act on the owner’s behalf.
        </li>
      </ul>
      <p>
        Please be aware that under 17 U.S.C. § 512(f), anyone who knowingly materially misrepresents
        that material is infringing may be liable for damages, including costs and attorneys’ fees.
        You may wish to consult an attorney before sending a notice.
      </p>

      <h2>Counter-Notification</h2>
      <p>
        If material you provided was removed or disabled in response to a DMCA notice and you believe
        it was removed by mistake or misidentification, you may send a counter-notice to our
        designated agent under 17 U.S.C. § 512(g)(3). Your counter-notice must include:
      </p>
      <ul>
        <li>Your physical or electronic signature;</li>
        <li>
          Identification of the material that was removed or disabled and the location where it
          appeared before removal;
        </li>
        <li>
          A statement, under penalty of perjury, that you have a good-faith belief that the material
          was removed or disabled as a result of mistake or misidentification;
        </li>
        <li>Your name, address, and telephone number; and</li>
        <li>
          A statement that you consent to the jurisdiction of the federal district court for the
          judicial district in which your address is located (or, if your address is outside the
          United States, any judicial district in which we may be found), and that you will accept
          service of process from the person who provided the original notice or their agent.
        </li>
      </ul>
      <p>
        If we receive a valid counter-notice, we may restore the material in 10 to 14 business days
        unless the original complainant notifies us that they have filed a court action seeking to
        restrain the alleged infringement.
      </p>

      <h2>Repeat Infringers</h2>
      <p>
        In appropriate circumstances, we will restrict or terminate access to the Site for users who
        are found to be repeat infringers of others’ copyrights.
      </p>

      <h2>Designated Copyright Agent</h2>
      {/*
        TODO (operator): Register a DMCA designated agent with the U.S. Copyright Office
        (https://www.copyright.gov/dmca-directory/) to qualify for safe-harbor protection
        under 17 U.S.C. § 512(c)(2). Make sure the details below match that registration,
        and renew the designation every three years.
      */}
      <p>Please send DMCA notices and counter-notices to:</p>
      <ul>
        <li>
          <strong>Name:</strong> DMCA Agent, {SITE.operator}
        </li>
        <li>
          <strong>Mailing address:</strong> {SITE.mailingAddress}
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </li>
      </ul>
      <p>
        Please use the subject line “DMCA Notice” or “DMCA Counter-Notice” so your message reaches
        the right place. This contact is for copyright matters only; for other questions, see our{' '}
        <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
      </p>
    </>
  );
}
