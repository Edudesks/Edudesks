
import "@/app/globals.css";
import Navbar from '@/components/LandingPageComponents/NavBar';
import PricingPlans from '@/components/LandingPageComponents/plan';
import QuestionAndAnswer from '@/components/LandingPageComponents/QuestionAndAnswer';
import Footer from '@/components/LandingPageComponents/Footer';
// import Image from 'next/image';

const PricingPage: React.FC = () => {
  
  return (
    <>
      <Navbar />
      <PricingPlans />
      <QuestionAndAnswer />
      <Footer />
    </>
  );
};

export default PricingPage;
