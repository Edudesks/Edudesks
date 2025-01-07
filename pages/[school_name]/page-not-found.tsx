import Image from "next/image";
import Link from "next/link";
import { inter, openSans } from "@/app/fonts/fonts";
import { useState, useEffect } from "react";
import GeneralButton from "@/components/GeneralButton";
import { useRouter } from "next/router";
import withProtectedRoute from "@/hoc/ProtectedRoute";
function PageNotFound (){
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const router = useRouter();

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
                <section className={` ${isBelow1328?'w-[400px]':'w-[300px] sm:w-[565.94px]'} h-[350px]  flex justify-center  lg:hidden`}>
                <div className='h-full'>
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
                <section className="flex w-full  flex-col text-[black] gap-[35px] items-center lg:pb-0 pb-8 lg:items-start h-[350px] justify-center">
                    <h1 className={`text-[65px] sm:text-[128px] font-bold leading-[80px]`}>oooops!</h1>
                    <h3 className='text-[16px] sm:text-[40px] font-bold'>404 - PAGE IN PROGRESS </h3>
                    <p className="text-[14px] sm:text-[20px] text-center">The page you are looking for is temporarily unavailable </p>
                    <GeneralButton onClick={()=>{
                        // Todo Later
                            if (document.referrer) {
                                router.back(); // Navigate to the previous page
                            } else {
                                router.push("/"); // Navigate to the dashboard if no referrer exists
                            }
                        
                    }} className="w-[200px]"  size="large" state="active" buttonText="Back"/>
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

export default withProtectedRoute(PageNotFound)