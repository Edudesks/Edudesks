import { useState, useEffect, Suspense, lazy } from 'react';
import Loader from '@/components/Loader';
import Loader2 from '@/components/Loader2';
import styles from '@/styles/LandingPage.module.css';

const Navbar = lazy(() => import('@/components/LandingPageComponents/NavBar'));
const Hero = lazy(() => import('@/components/LandingPageComponents/Hero'));
const TrustedSection = lazy(() => import('@/components/LandingPageComponents/TrustedSection'));
const CallActionOne = lazy(() => import('@/components/LandingPageComponents/CallActionOne'));
const Features = lazy(() => import('@/components/LandingPageComponents/Features'));
const CallActionTwo = lazy(() => import('@/components/LandingPageComponents/CallActionTwo'));
const HowItWorks = lazy(() => import('@/components/LandingPageComponents/HowItWorks'));
const FaqSection = lazy(() => import('@/components/LandingPageComponents/FaqSection'));
const Footer = lazy(() => import('@/components/LandingPageComponents/Footer'));
const TakeControl = lazy(() => import('@/components/LandingPageComponents/TakeControl'));

const LandingPage: React.FC = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(true);
  
  useEffect(() => {
    
    const hasLoadedBefore = sessionStorage.getItem('landingPageLoaded') || false;
    if (hasLoadedBefore) {
      setIsLoaderVisible(false);
    } else {
      setIsLoaderVisible(true);
      const minimumLoadDuration = 7000;
      const loaderTimer = setTimeout(() => {
        setIsLoaderVisible(false);
        sessionStorage.setItem('landingPageLoaded', 'true');
      }, minimumLoadDuration);

      return () => {
        clearTimeout(loaderTimer);
      };
    }
  }, []);

  if (isLoaderVisible){
    return (
      <div className={styles.landingPage}>
        <Loader />
    </div>
    )
  }
  else {
    return (
      <div className={styles.landingPage}>
          <Suspense fallback={<Loader2 />}>
            <Navbar />
            <Hero />
            <TrustedSection />
            <CallActionOne />
            <Features />
            <CallActionTwo />
            <HowItWorks />
            <FaqSection />
            <TakeControl />
            <Footer />
          </Suspense>
      </div>
    );
  }
};

export default LandingPage;
