import "../app/globals.css";
import Navbar from '@/components/LandingPageComponents/NavBar';
import Footer from '@/components/LandingPageComponents/Footer';
import styles from '@/styles/LandingPage.module.css';
import Link from "next/link";
import TakeControl from "@/components/LandingPageComponents/TakeControl";

const PrivacyPolicy = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <div className={styles.privacyPolicyContainer}>
      <p className={styles.topPrivacy}>
        <Link href="/">Home</Link> / Privacy Policy
        </p>
        <h1 className={styles.header}>Privacy Policy</h1>
        <p className={styles.subHeader}>
        Your Data, Your Privacy: Safeguarding Your Information with Care and Transparency
        </p>
        <div className={styles.privacyPolicyContent}>
          
          {/* Table of Contents */}
          <div className={styles.tableOfContents}>
            <h2 className={styles.tableOfContentsTitle}>Table of contents</h2>
            <ul className={`${styles.listItems} space-y-2`}>
              <li>Introduction</li>
              <li>Information we collect</li>
              <li>How we use your information</li>
              <li>Data security</li>
              <li>Data Retention</li>
              <li>Your Data Rights</li>
              <li>Cookies and tracking technologies</li>
              <li>Changes to this privacy policy</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Privacy Policy Content */}
          <div className={styles.policyContent}>
            {/* Section 1 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>1. Introduction</h3>
              <p>
                Welcome to Dudesk. We value your privacy and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
              </p>
            </div>

            {/* Section 2 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>2. Information We Collect</h3>
              <h4 className={styles.subSectionTitle}>A. Personal Information:</h4>
              <p>
                We collect personal details such as your name, email address, phone number, school name, and
                other contact details when you register or interact with our platform.
              </p>
              <h4 className={styles.subSectionTitle}>B. Financial Information:</h4>
              <p>
                For schools using our platform to manage salaries, expenses, and other financial activities, we collect and secure payment information, such as bank details and transaction history.
              </p>
              <h4 className={styles.subSectionTitle}>C. Usage Data:</h4>
              <p>
                We gather information about how you use the platform, including login times, the frequency of your interactions, features you access, and the types of actions you perform. This data helps us optimize the user experience and improve functionality.
              </p>
              <h4 className={styles.subSectionTitle}>D. Device and Log Data:</h4>
              <p>
                We may also collect information about the devices you use to access our platform, including IP addresses, browser type, and operating systems. This helps us maintain the security and integrity of our platform.
              </p>
            </div>

            {/* Section 3 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>3. How We Use Your Information</h3>
              <p>
                Your information is essential for the functionality of our platform. We use it to:
              </p>
              <ul className={`${styles.listDisc} space-y-2`}>
                <li>
                Provide Services: Manage your account, process payments, and enable key features like salary payments, expense tracking, and school financial management.
                </li>
                <li>
                Personalization: Customize your experience on the platform, making recommendations or providing relevant updates based on your usage.
                </li>
                <li>
                    Communication: Send you important notifications, updates, or information about new features, as well as respond to any inquiries or support requests.
                </li>
                <li>
                Analytics and Improvement: Analyze user behavior to enhance the platform&apos;s performance and introduce new features that improve your experience.
                </li>
                <li>
                Legal Compliance: Comply with any applicable laws, regulations, or legal requests that may require us to share your data.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>4. Data Security</h3>
              <p>
              We take the security of your data seriously. To protect your personal and financial information, we use a range of industry-standard measures, including encryption, secure servers, and regular security audits. We also limit access to sensitive information to authorized personnel only. However, please note that no security system is completely foolproof, and we cannot guarantee the absolute security of your data.
              </p>
            </div>


            {/* Section 5 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>5. Data Retention</h3>
              <p>
              We retain your personal and financial data for as long as necessary to provide you with our services and comply with legal requirements. When data is no longer needed, it is securely deleted or anonymized. You have the right to request the deletion of your data, as outlined below
              </p>
            </div>


            {/* Section 6 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>6. Your Data Rights</h3>
              <p>
              Under applicable privacy laws, you have several rights concerning your personal data, including:
              </p>
              <ul className={`${styles.listDisc} space-y-2`}>
                <li>
                Access and Rectification: You can request access to the personal data we hold about you and request that we correct any inaccuracies.
                </li>

                <li>
                Deletion: You have the right to request that we delete your personal data, subject to any legal obligations that require us to retain it.
                </li>

                <li>
                    Data Portability: In some cases, you may request a copy of your data in a machine-readable format.
                    </li>

                <li>
                Objection and Restriction: You may object to certain data processing activities, or request that we restrict processing in specific circumstances.
                </li>
                <li>
                Legal Compliance: Comply with any applicable laws, regulations, or legal requests that may require us to share your data.
                </li>
              </ul>
              <p></p>
              <p>
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
              </p>
            </div>

            {/* Section 7 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>7. Cookies and Tracking Technologies</h3>
              <p>
              We use cookies and similar tracking technologies to collect information about your interaction with the platform. Cookies allow us to improve your experience by:
              </p>
              <ul className={`${styles.listDisc} space-y-2`}>
                <li>
                Remembering your login details and other preferences so that you don&apos;t have to re-enter them each time you visit.
               </li>

                <li>
                    Analyzing usage data to understand how users interact with the platform, which helps us optimize performance.
                </li>
                <li>
                Personalizing content and ads based on your past behavior.
                </li>
              </ul>
              <p></p>
              <p>
              You can manage or disable cookies through your browser settings, though this may limit your ability to use certain features on the platform.
              </p>
            </div>
            {/* Section 8 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h3>
              <p>
              We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or technological advances. Any significant updates will be communicated via email or an in-app notification. Please review this policy regularly to stay informed about how we protect your privacy.
              </p>
            </div>

            {/* Section 9 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>9. Contact Us</h3>
              <p>If you have any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at: </p>
            <p> Email: ann187@ensign.edu</p>
            <p>We are committed to responding to your inquiries and resolving any concerns in a timely manner.</p>
            </div>
          </div>
        </div>
      </div>
      <TakeControl/>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
