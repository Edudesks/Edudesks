
import "@/app/globals.css";
import Navbar from '@/components/LandingPageComponents/NavBar';
import Plans from '@/components/LandingPageComponents/plan';
import QuestionAndAnswer from '@/components/LandingPageComponents/QuestionAndAnswer';
import Footer from '@/components/LandingPageComponents/Footer';
// import Image from 'next/image';


const LandingPage: React.FC = () => {
  
  return (
    <>
      <Navbar />
      <Plans />
      <QuestionAndAnswer />
      <Footer />
    </>
  );
};

export default LandingPage;
