// pages/index.tsx
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/LandingPageComponents/NavBar';
import Hero from '@/components/LandingPageComponents/Hero';
import TrustedSection from '@/components/LandingPageComponents/TrustedSection';
import CallActionOne from '@/components/LandingPageComponents/CallActionOne';
import Features from '@/components/LandingPageComponents/Features';
import CallActionTwo from '@/components/LandingPageComponents/CallActionTwo';
// import Plans from '@/components/LandingPageComponents/Plans';
import HowItWorks from '@/components/LandingPageComponents/HowItWorks';
import FaqSection from '@/components/LandingPageComponents/FaqSection';
import Footer from '@/components/LandingPageComponents/Footer';
import TakeControl from '@/components/LandingPageComponents/TakeControl';
// import Image from 'next/image';


const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Navbar />
      <Hero />
      <TrustedSection />
      <CallActionOne />
      <Features />
      <CallActionTwo />
      {/* <Plans /> */}
      <HowItWorks />
      <FaqSection />
      <TakeControl />
      <Footer />
    </>
  );
};

export default LandingPage;
