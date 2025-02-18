import { FC } from 'react';
import Image from 'next/image';

const CallActionOne: FC = () => (
  <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
    {/* Left Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
      <h2 className="text-[30px] lg:text-[35px]  font-bold">
        Optimize School Financial Management with Edudesks
      </h2>
      <p className="mt-4 mb-6 text-gray-700">
        EduDesks offers a comprehensive solution for seamless school 
        financial management. Designed to streamline budgeting, expense tracking, 
        and payment management, its features include detailed financial reports 
        and real-time analytics, empowering you to gain greater control over your 
        institution&apos;s finances.
      </p>
    </div>

    {/* Right Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src="/images/income.png"
        alt="analytics"
        className="w-full max-w-[400px] h-auto object-contain"
        width={400}
        height={400}
        priority
      />
    </div>
  </section>
);

export default CallActionOne;
