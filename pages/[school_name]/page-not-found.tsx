import Image from "next/image";
import Link from "next/link";
import { inter, openSans } from "@/app/fonts/fonts";
import { useState, useEffect } from "react";
export default function PageNotFound (){
    const [windowWidth, setWindowWidth] = useState<number>(0);

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
        <>
            <div className={`${inter.className} flex lg:h-[509px] h-full items-start justify-center mt-[2rem]  px-10 `}>
                <div className="flex items-center justify-between h-full w-full lg:flex-row flex-col lg:gap-0 gap-10">

                {/* media section */}
                <section className="h-[350px] w-full block lg:hidden">
                <div className={`${isBelow1328?'w-[400px]':'w-full sm:w-[565.94px]'} h-full`}>
                  <Image
                    src={"/icons/page_not_found_2.svg"}
                    alt="employees icon"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    quality={75}
                  />
                </div>
                </section>

                {/* section 1 */}
                <section className="flex w-full  flex-col text-[black] gap-[35px] items-center lg:pb-0 pb-8 lg:items-start h-[350px]">
                    <h1 className={`${isBelow1328?'text-[78px]':'text-[50px] sm:text-[98px]'} font-bold leading-[80px]`}>oooops!</h1>
                    <h3 className={`${isBelow1328?'text-[25px]':'text-[19px] sm:text-[30px]'} font-bold`}>404 - PAGE IN PROGRESS </h3>
                    <p className="text-[15px] sm:text-[18px]">The page you are looking for is temporarily unavailable </p>
                    <button className="flex items-center gap-[10px] bg-[var(--primary)] text-[16px] md:text-[14px] font-bold text-[white] w-[169px] h-[42px] rounded-[22px] justify-center border-none hover:bg-[#022335]">Back </button>
                </section>

                {/* section 2 */}
                <section className="h-[350px] w-full lg:block hidden">
                <div className={`${isBelow1328?'w-[400px]':'w-[565.94px]'} h-full`}>
                  <Image
                    src={"/icons/page_not_found_2.svg"}
                    alt="employees icon"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    quality={75}
                  />
                </div>
                </section></div>
            </div>
        </>
    )
}