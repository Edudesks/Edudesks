import { useState } from 'react';
import Avatar1 from '../../assets/avatar1.svg';
import Avatar2 from '../../assets/avatar2.svg';
import Avatar3 from '../../assets/avatar3.svg';
import styles from '../../styles/LandingPage.module.css';
import Image from 'next/image';
import ButtonStart from './Button';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How easy is it to set up EduDesks?',
      answer:
        'Very easy! EduDesks has a simple setup process, with guided steps to get you up and running fast.',
    },
    {
      question: 'Can I track income and expenses?',
      answer:
        'Absolutely! EduDesks lets you easily track and categorize income and expenses, making budgeting simple.',
    },
    {
      question: 'Can I edit payment details after setting them up?',
      answer:
        'Yes, you can easily modify employee payment details and schedules whenever needed.',
    },
    {
      question: 'Can parents pay school fees into the website?',
      answer:
        'Currently, the platform does not support fee collection. However, you can manage and track school fees by entering the income manually.',
    },
    {
      question: 'What happens if the wallet runs out of funds?',
      answer:
        'If your wallet runs low, you will be notified, and you can quickly top it up to continue making payments without interruption.',
    },
    {
      question: 'How do I pay staff salaries?',
      answer:
        'You can pay staff salaries directly from the platform by funding your wallet, entering employee details, or directly from their profile.',
    },
  ];

  return (
    <div className={styles.faqPage}>
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <p>Popular questions asked about Edudesk</p>
        <ul className={styles.faqList}>
          {faqs.map((faq, index) => (
            <li
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                {faq.question}
                <div className={styles.faqIcon}>
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>
              {activeIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contactCard}>
        <div className={styles.avatarGroup}>
        <Image
        src={"/icons/avatar1.svg"}
        alt="Arrow Icon"
        className={styles.avatar}
        width={25}
        height={10}
      />
      <Image
        src={"/icons/avatar2.svg"}
        alt="Arrow Icon"
        className={styles.center}
        width={25}
        height={10}
      />
      <Image
        src={"/icons/avatar3.svg"}
        alt="Arrow Icon"
        className={styles.avatar}
        width={25}
        height={10}
      />
          
        </div>
        <h3>Still have questions?</h3>
        <p>
          Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly
          team.
        </p>
        <ButtonStart variant="light" text="Get in touch" />
      </div>
    </div>
  );
};

export default FaqSection;
