import { useState } from 'react';
import styles from '../../styles/LandingPage.module.css';


const QuestionAndAnswer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuest = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const quests = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes you can try out the 30 days free trial. we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running.',
    },
    {
      question: 'What are the available pricing plans for the platform?',
      answer:
        'Our platform offers three flexible pricing plans such as Basic Plan Ideal for small institutions with basic tracking needs. Standard Plan: Suitable for medium-sized institutions needing advanced features like automated reports and multi-user access. Premium Plan: Designed for larger institutions with comprehensive needs, including API integration and priority support',
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer:
        'Our platform allows you to upgrade or downgrade your subscription based on your changing needs.',
    },
    {
      question: 'Are there any additional charges apart from the subscription fee?',
      answer:
        'The subscription fee covers most features, but there may be additional charges for premium services such as API access, extra storage, or priority support. These charges are optional and clearly outlined before purchase.',
    },
    {
      question: 'Do you offer discounts for educational institutions or long-term subscriptions?',
      answer:
        'Yes, we provide special discounts for educational institutions and users who commit to annual or multi-year plans. Please contact our support team for more information on eligible discounts and custom pricing options.',
    },
  ];

  return (
    <div className={styles.questPage}>
      <div className={styles.questionAndAnswer}>
        <h2>Questions And Answers</h2>
        <p>Everything you need to know about the product and billing</p>
        <ul className={styles.questList}>
          {quests.map((quest, index) => (
            <li
              key={index}
              className={`${styles.questItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div className={styles.questQuestion} onClick={() => toggleQuest(index)}>
                {quest.question}
                <div className={styles.questIcon}>
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>
              {activeIndex === index && (
                <div className={styles.questAnswer}>{quest.answer}</div>
              )}
            </li>
          ))}
        </ul>
        <p></p>
        <p>Still need help? Reach out to us via <a href="#">@edudesk.com</a></p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
