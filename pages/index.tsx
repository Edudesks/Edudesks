// pages/index.tsx
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import styles from '../styles/LandingPage.module.css';
// import Image from 'next/image';


const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={styles.container}>
      <h1>Welcome to My Landing Page</h1>
      <p>I am currently working on the landing page</p>
    </div>
  );
};

export default LandingPage;
