import Image from 'next/image';
export default function WhyChooseEdudesks() {
    return (
      <div className="py-12">
        <h2 className="text-center text-2xl font-semibold text-[var(--secondary)] mb-6">
          Why Choose Edudesks
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-[var(--primary)] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg text-[var(--secondary-text-color)] font-semibold">{feature.title}</h3>
              <p className="text-sm leading-[1.5rem] mt-2 text-[var(--border)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const features = [
    {
      icon: <Image 
            alt="laptop"      
            width={30}
            height={30}
            src="/icons/laptop.svg"
            className="text-[var(--primary)] text-xl" />,
      title: "Seamless & User-Friendly",
      description:
        "Enjoy an intuitive platform designed for easy navigation, making school management effortless for administrators and staff.",
    },
    {
      icon: <Image 
            alt="money"      
            width={30}
            height={30}
            src="/icons/money.svg"
             />,
      title: "Affordable & Scalable",
      description:
        "Flexible pricing plans designed to fit schools of all sizes, offering powerful features without breaking the budget.",
    },
    {
      icon: <Image 
            alt="call"      
            width={30}
            height={30}
            src="/icons/call.svg"
             />,
      title: "24/7 Expert Support",
      description:
        "Our dedicated support team is always available to assist you, ensuring uninterrupted operations and peace of mind.",
    },
  ];
  