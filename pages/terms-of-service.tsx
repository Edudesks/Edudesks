import "../app/globals.css";
import Navbar from '@/components/LandingPageComponents/NavBar';
import Footer from '@/components/LandingPageComponents/Footer';
import styles from '@/styles/LandingPage.module.css';
import Link from "next/link";
import TakeControl from "@/components/LandingPageComponents/TakeControl";

const TermsOfService = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <div className={styles.privacyPolicyContainer}>
      <p className={styles.topPrivacy}>
        <Link href="/">Home</Link> / Terms Of Service
        </p>
        <h1 className={styles.header}>Terms Of Service</h1>
        <p className={styles.subHeader}>
        Your Agreement with Us: Understanding the Terms for Using Our Platform
        </p>
        <div className={styles.privacyPolicyContent}>
          
          {/* Table of Contents */}
          <div className={styles.tableOfContents}>
            <h2 className={styles.tableOfContentsTitle}>Table of contents</h2>
            <ul className={`${styles.listItems} space-y-2`}>
              <li>Introduction</li>
              <li>Use of the platform</li>
              <li>Subscription and payment terms</li>
              <li>User responsibilities</li>
              <li>Termination</li>
              <li>Limitation of liabilities</li>
              <li>Data and privacy</li>
              <li>Modification to the terms</li>
              <li>Contact information</li>
            </ul>
          </div>

          {/* Privacy Policy Content */}
          <div className={styles.policyContent}>
            {/* Section 1 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>1. Introduction</h3>
              <p>
              Welcome to Edudesks. These Terms of Service (&quot;Terms&quot;) govern your use of our platform and services. By accessing or using Edudesks, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our platform.
              </p>
            </div>

            {/* Section 2 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>2. Use of the Platform</h3>
              <h4 className={styles.subSectionTitle}>A. Eligibility:</h4>
              <p>
                You must be at least 18 years old or the legal age of majority in your jurisdiction to use the platform. By using [Platform Name], you represent and warrant that you meet these requirements.
              </p>
              <h4 className={styles.subSectionTitle}>B. Account Registration:</h4>
              <p>
              To use certain features, you must create an account. You agree to provide accurate, complete information and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.              </p>
              <h4 className={styles.subSectionTitle}>C. Prohibited Activities:</h4>
              <p>
              You agree not to engage in any of the following while using the platform:
              </p>
              <ul className={`${styles.listDisc} space-y-2`}>
                <li>
                Using the platform for any unlawful or unauthorized purpose.                </li>
                <li>
                Personalization: Customize your experience on the platform, making recommendations or providing relevant updates based on your usage.
                </li>
                <li>
Distributing viruses, malware, or other harmful software.                </li>
                <li>
Interfering with or disrupting the platform’s operation or security features.                </li>
                <li>
Attempting to access or use another user’s account without permission.                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>3. Subscription and Payment Terms</h3>
              <h4 className={styles.subSectionTitle}>A. Subscription Plans:</h4>
              <p>
              Edudesks offers various subscription plans for accessing premium features. Each plan has its own fees, which are disclosed during registration or upon upgrading.              </p>
              <h4 className={styles.subSectionTitle}>B. Payment Methods:</h4>
              <p>
              Payments are processed securely using third-party payment providers. By providing payment information, you authorize us to charge the applicable fees to your chosen method of payment.
              </p>
              <h4 className={styles.subSectionTitle}>C. Automatic Renewal:</h4>
              <p>
              Unless otherwise stated, all subscription plans automatically renew at the end of their billing cycle (monthly, termly, or yearly). You may cancel your subscription at any time, but no refunds will be provided for partial billing periods
              </p>
            </div>

            {/* Section 4 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>4. User Responsibilities</h3>
              <h4 className={styles.subSectionTitle}>A. Data Accuracy:</h4>
              <p>
              As a financial management platform, it is essential that all data entered, including income and expense records, is accurate. You are responsible for ensuring the accuracy of all financial data input.
              </p>
              <h4 className={styles.subSectionTitle}>B. Compliance with Laws:</h4>
              <p>
              You agree to comply with all applicable local, state, and federal laws while using the platform. This includes ensuring that your use of the platform complies with data protection, privacy, and tax laws in your region.
              </p>
              <h4 className={styles.subSectionTitle}>C. Account Security:</h4>
              <p>
              You are responsible for safeguarding your account credentials. If you suspect unauthorized access to your account, you must notify us immediately.
              </p>
            </div>


            {/* Section 5 */}
            <div className={styles.sectionContent}>
            <h3 className={styles.sectionTitle}>5. Termination</h3>
              <h4 className={styles.subSectionTitle}>A. Account Termination:</h4>
              <p>
              We reserve the right to suspend or terminate your account if you violate these Terms, misuse the platform, or engage in illegal activities. Upon termination, you will lose access to your account, and any data stored on the platform may be deleted.              </p>
              <h4 className={styles.subSectionTitle}>B. Cancellation of Service:</h4>
              <p>
              You may cancel your subscription at any time via your account settings. After cancellation, you will continue to have access to paid features until the end of your current billing cycle.              </p>
            </div>


            {/* Section 6 */}
            <div className={styles.sectionContent}>
            <h3 className={styles.sectionTitle}>6. Limitation of Liability</h3>
              <h4 className={styles.subSectionTitle}>A. Disclaimer of Warranties:</h4>
              <p>
              As a financial management platform, it is essential that all data entered, including income and expense records, is accurate. You are responsible for ensuring the accuracy of all financial data input.
              </p>
              <h4 className={styles.subSectionTitle}>B. Limitation of Liability:</h4>
              <p>
              In no event shall [Platform Name], its officers, directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or related to your use of the platform, even if advised of the possibility of such damages.              
              </p>
            </div>

            {/* Section 7 */}
            <div className={styles.sectionContent}>
            <h3 className={styles.sectionTitle}>7. Data and Privacy</h3>
              <h4 className={styles.subSectionTitle}>A. Privacy Policy:</h4>
              <p>
              Your use of the platform is also governed by our [Privacy Policy], which outlines how we collect, use, and protect your personal information.              </p>
              <h4 className={styles.subSectionTitle}>B. Data Security:</h4>
              <p>
              We implement various security measures to protect your personal and financial data. However, we do not guarantee that unauthorized third parties will never be able to defeat these measures.
              </p>
            </div>
            {/* Section 8 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>8. Modifications to the Terms</h3>
              <p>
              We reserve the right to modify these Terms at any time. When we do, we will notify you via email or through the platform. Your continued use of the platform after the changes become effective constitutes acceptance of the revised Terms.              </p>
            </div>

            {/* Section 9 */}
            <div className={styles.sectionContent}>
              <h3 className={styles.sectionTitle}>9. Contact Information</h3>
              <p>If you have any questions about these Terms or need assistance, please contact us at:</p>
            <p> Email: ann187@ensign.edu</p>
            <p><input type="checkbox"/> I agree to the terms of service</p>
            </div>
          </div>
        </div>
      </div>
      <TakeControl/>
      <Footer />
    </div>
  );
};

export default TermsOfService;
