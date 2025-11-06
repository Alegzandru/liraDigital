'use client'
import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'

export default function CookiePolicy() {
  return (
    <main className="bg-ui-black text-ui-grey px-container-sm md:px-container-md lg:px-container-lg py-30">
      <HeadWithMeta title={'Cookie Policy | Lira Digital'} description={''} index={false} img={''} />
      <div className="max-w-1200px mx-auto">
        {/* Title */}
        <h1 className="font-Poppins text-lg-h2-poppins md:text-lg-h1-poppins font-semibold mb-18 bg-clip-text text-ui-peach">
          COOKIE POLICY
        </h1>

        <section className="space-y-15">
          {/* 1 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              1. Purpose of This Policy
            </h2>
            <p className="text-md-p font-Poppins">
              This Cookie Policy explains how Miada Rosmerta LLC (&quot;Miada
              Rosmerta&quot;, &quot;we&quot;, &quot;our&quot;) uses cookies and
              similar technologies on this website. It outlines what cookies
              are, how we use them, and how you can manage your preferences.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              2. What Are Cookies?
            </h2>
            <p className="text-md-p font-Poppins">
              Cookies are small text files placed on your device when you visit
              a website. They help us recognize your browser, remember your
              preferences, and improve functionality, performance, and security.
              Some cookies are essential to make the site work, while others
              help us improve user experience or deliver targeted content.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-4">
              3. Types of Cookies We Use
            </h2>

            <div className="overflow-x-auto border border-ui-black70 rounded-lg">
              <table className="w-full text-left text-sm md:text-md-p">
                <thead className="bg-ui-black75 text-ui-white font-Poppins">
                  <tr>
                    <th className="p-4">Category</th>
                    <th className="p-4">Purpose</th>
                    <th className="p-4">Example Tools</th>
                    <th className="p-4">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ui-black70 font-Poppins">
                  <tr>
                    <td className="p-4 text-ui-white">
                      Strictly Necessary Cookies
                    </td>
                    <td className="p-4">
                      Enable essential website functions such as navigation,
                      session management, and security. These cannot be
                      disabled.
                    </td>
                    <td className="p-4">Internal cookies</td>
                    <td className="p-4">Session / up to 12 months</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-ui-white">Analytics Cookies</td>
                    <td className="p-4">
                      Collect anonymous data to analyze site performance and
                      user behavior, helping us enhance usability.
                    </td>
                    <td className="p-4">
                      Google Analytics 4 (with IP anonymization)
                    </td>
                    <td className="p-4">13 months</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-ui-white">Marketing Cookies</td>
                    <td className="p-4">
                      Measure advertising performance and deliver personalized
                      ads across platforms.
                    </td>
                    <td className="p-4">Meta Pixel, LinkedIn Insight Tag</td>
                    <td className="p-4">Up to 6 months</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-ui-white">
                      Personalization Cookies
                    </td>
                    <td className="p-4">
                      Remember user settings and preferences, such as language
                      or layout.
                    </td>
                    <td className="p-4">Internal preference cookies</td>
                    <td className="p-4">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              4. How We Use Cookies
            </h2>
            <ul className="list-disc list-inside space-y-1 text-md-p font-Poppins">
              <li>Ensure the site operates securely and efficiently.</li>
              <li>
                Analyze visitor interactions for performance improvements.
              </li>
              <li>Measure and optimize marketing activities.</li>
              <li>Personalize your browsing experience.</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              5. Managing Your Preferences
            </h2>
            <p className="text-md-p font-Poppins">
              You can adjust or withdraw your cookie preferences anytime by
              clicking “Cookie Settings” in the footer. You can also delete or
              block cookies via your browser settings, though this may affect
              certain site functionalities.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              6. Legal Basis for Processing
            </h2>
            <p className="text-md-p font-Poppins">
              Strictly necessary cookies are processed under our legitimate
              interest (Article 6(1)(f) GDPR). All other cookies are used only
              with your explicit consent (Article 6(1)(a) GDPR).
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              7. Third-Party Cookies
            </h2>
            <p className="text-md-p font-Poppins">
              Some cookies are placed by external partners (e.g., Google, Meta,
              LinkedIn) for analytics and advertising purposes. We recommend
              reviewing their individual privacy policies.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              8. Data Retention
            </h2>
            <p className="text-md-p font-Poppins">
              Cookies are stored for the periods stated above or until you
              withdraw consent. Data collected through cookies is automatically
              deleted when no longer necessary.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-lg-h4-poppins md:text-md-h3-poppins font-Poppins text-ui-white mb-2">
              9. Policy Updates
            </h2>
            <p className="text-md-p font-Poppins">
              We may update this Cookie Policy periodically to reflect new
              technologies or legal requirements. The latest version is always
              available on this page.
            </p>
            <p className="mt-4 text-sm-p text-ui-darkGrey font-Poppins">
              Last updated: November 2025
            </p>
            <p className="mt-2 text-sm-p text-ui-darkGrey font-Poppins">
              Contact:{' '}
              <a
                href="mailto:office@lira.md"
                className="bg-clip-text text-transparent bg-gradient-to-r from-ui-peach to-ui-pink hover:underline"
              >
                office@lira.md
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
