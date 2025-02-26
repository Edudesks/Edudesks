import Image from 'next/image';

const CallActionTwo = () => (
  <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src="/images/analytics.png"
        alt="analytics"
        className="w-full max-w-[600px] h-auto object-contain"
        width={600}
        height={600}
        priority
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
      <h2 className="text-[30px] lg:text-[35px] font-bold">
        Smart Sales Tracking for Seamless Operations
      </h2>
      <p className="mt-4 mb-6 text-gray-700">
        Eliminate manual errors and streamline financial management with automated fee processing, 
        expense tracking, and real-time analytics. Keep your school&apos;s cash flow organized 
        and optimize revenue collection effortlessly.
      </p>
    </div>
  </section>
);

export default CallActionTwo;
