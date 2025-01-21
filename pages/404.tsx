import Image from "next/image";
import Link from "next/link";
import { inter, openSans } from "@/app/fonts/fonts";
import { useState, useEffect } from "react";
import Navbar from "@/components/LandingPageComponents/NavBar";
import Footer from "@/components/LandingPageComponents/Footer";
import { useRouter } from "next/router";
export default function PageNotFound (){
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const router = useRouter();
    const { dashboard } = router.query
    const dashboardString = Array.isArray(dashboard) ? dashboard[0] : dashboard

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const updateWindowWidth = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", updateWindowWidth);
      return () => window.removeEventListener("resize", updateWindowWidth);
    }
  }, []);

  const isBelow1328 = windowWidth <= 1328 && windowWidth >=1024;
    return(
        <div className="bg-[var(--background)]">
        <Navbar/>
            <div className={`${inter.className} flex lg:h-[509px] h-full items-start justify-center mt-[2rem] px-10`}>
                <div className="flex items-center justify-between h-full w-full lg:flex-row flex-col lg:gap-0 gap-10">

                {/* media section */}
                <section className={` ${isBelow1328?'w-[400px]':'w-[300px] sm:w-[565.94px]'} h-[350px]  flex justify-center  lg:hidden`}>
                <div className='h-full'>
                  <Image
                    src={"/icons/page_not_found_1.svg"}
                    alt="employees icon"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    quality={75}
                  />
                </div>
                </section>

                {/* section 1 */}
                <section className="flex w-full h-full  flex-col text-[black] gap-[35px] items-center lg:pb-0 pb-8 lg:items-start justify-center">
                    <h1 className={`text-[65px] sm:text-[128px] font-bold leading-[80px]`}>oooops!</h1>
                    <h3 className='text-[16px] sm:text-[40px] font-bold'>404 - PAGE IN PROGRESS </h3>
                    <p className="text-[14px] sm:text-[20px] text-center">The page you are looking for is temporarily unavailable </p>
                    <button
                    onClick={()=>{
                      if (dashboardString) {
                        router.push(dashboardString); // Navigate to the previous page
                    } else {
                        router.push("/"); // Navigate to the dashboard if no referrer exists
                    }
                    }}
                    className="flex items-center gap-[10px] bg-[var(--primary)] text-[16px] md:text-[14px] font-bold text-[white] w-[169px] h-[42px] rounded-[22px] justify-center border-none hover:bg-[#022335]">Back </button>
                </section>

                {/* section 2 */}
                <section className="h-full w-full lg:block hidden">
                <div className={`${isBelow1328?'w-[600px]':'w-[765.94px]'} h-full`}>
                  <Image
                    src="/icons/page_not_found_1.svg"
                    alt="page not found"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    quality={75}
                  />
                </div>
                </section></div>
            </div>
            <Footer/>
        </div>
    )
}