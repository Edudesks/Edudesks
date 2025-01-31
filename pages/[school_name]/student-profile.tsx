import { ArrowLeft01Icon } from "hugeicons-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import classNames from "classnames";
import StudentRegisterDetails from "@/components/StudentComponent/StudentRegisterDetails";
import { useRouter } from "next/router";

import { useAppDispatch } from "@/store/hooks";
import { setActivePage } from "@/store/slices/sidebarSlice";

const Card = ({
  iconSrc,
  title,
  value,
  bgColor = "bg-[#FFFFFF]",
  headerColor = "text-[var(--grey)]",
  textColor = "text-[var(--primary-text-color)]",
}: {
  iconSrc: string;
  title: string;
  value: string;
  bgColor?: string;
  headerColor?: string;
  textColor?: string;
}) => (
  <div className={`w-full min-h-[140px] rounded-[15px] border border-[var(--border)] py-[16px] px-[38px] flex flex-col gap-[.1rem] ${bgColor}`}>
    <div className="w-[41px] h-[38px]">
      <Image src={iconSrc} alt={title} width={1000} height={1000} loading="lazy" quality={75} />
    </div>
    <h6 className={`${headerColor} text-[18px] font-[400] leading-[25px]`}>{title}</h6>
    <p className={`${textColor} font-[500] text-[18px] leading-[25px]`}>{value}</p>
  </div>
);

function StudentProfile() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const router = useRouter();
  const { school_name } = router.query; 

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const updateWindowWidth = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", updateWindowWidth);
      return () => window.removeEventListener("resize", updateWindowWidth);
    }
  }, []);

  const isBelow1220 = windowWidth < 1227;
  const isBelow1041 = windowWidth < 1041;
  const isBelow760 = windowWidth < 760;
  const dispatch = useAppDispatch();
      useEffect(()=>{
          dispatch(setActivePage({active:"student-profile", parentNav: "student"})); 
        })
  return (
    <>


      <div className={classNames("flex flex-col gap-[31px] pt-4 w-[100%] px-5 overflow-x-hidden", {
      //       "w-[100%]": isBelow760,
      // "w-[70%]": !isBelow760 && isBelow1220,
      // "w-[80%]": !isBelow1220,
          })}>
        {/* Button Container Header*/}
        <section className={classNames("flex items-center justify-between w-full lg:w-full lg:pr-[5%] overflow-x-hidden", {
            "flex-wrap gap-3": isBelow1041,
            "no-wrap": !isBelow1041,
          })}>
          <div className="">
          <button onClick={() => router.push('/Edudesk/student')} className="flex items-center gap-[8px] sm:w-[169px] w-[6rem] rounded-[22px] bg-none sm:bg-[var(--primary)] justify-center h-[42px] text-[16px] text-[var(--primary-text-color)] sm:text-[var(--secondary-text-color)] font-[700]">
            <ArrowLeft01Icon size={18} />
            Back
          </button>
          </div>

          <div className="sm:hidden flex items-center gap-[10px]">
          <div className="w-[24px] h-[24px]">
          <Image src="/icons/bin.svg" alt="Student Profile" width={1000} height={1000} loading="lazy" />
          </div>

          <div className="w-[24px] h-[24px]">
          <Image src="/icons/edit_icon.svg" alt="Student Profile" width={1000} height={1000} loading="lazy" />
          </div>
          </div>
          <div className={classNames("sm:flex gap-[10px]  hidden", {
            "flex-wrap": isBelow1041,
            "no-wrap": !isBelow1041,
          })}>
            <button className="rounded-[22px] bg-[var(--primary)] w-[169px] h-[42px] text-[var(--secondary-text-color)] font-[700]"
            onClick={()=> router.push(`/${school_name}/edit-student`)}
            >
              Edit profile
            </button>
            <button className="rounded-[22px] bg-[var(--danger)] w-[169px] h-[42px] text-[var(--secondary-text-color)] font-[700]">
              Delete profile
            </button>
          </div>
        </section>

        {/* Student Profile Container */}
        <section className="flex items-center gap-[18px] overflow-x-hidden">
          <div className="sm:w-[100px] sm:h-[100px] w-[85.1px] h-[85.1px]">
            <Image src="/student_profile_icon.svg" alt="Student Profile" width={1000} height={1000} loading="lazy" />
          </div>
          <div>
            <h6 className="text-[var(--primary-text-color)] font-[400] text-[20px] sm:text-[24px] leading-[35.74px] sm:leading-[42px]">Anita Nwosu</h6>
            <p className="font-[400] text-[var(--grey)] text-[16px] sm:text-[20px] leading-[17.87px]sm:leading-[21px]">Assigned teacher: Mr Taiwo</p>
          </div>
        </section>

        {/* Registration Cards */}
        <section
          className={classNames("flex items-center gap-[30px] w-full lg:w-full pr-0 md:pr-[5%]", {
            "flex-wrap": isBelow1220,
            "no-wrap": !isBelow1220,
          })}
        >
          <Card iconSrc="/icons/bookmark_gray.svg" title="Registration No" value="A2-001" bgColor="bg-[var(--primary)]" headerColor="text-[var(--border)]" textColor="text-[#FFFFFF]" />
          <Card iconSrc="/icons/bookmark_blue.svg" title="Admission Date" value="20th June 2020" />
          <Card iconSrc="/icons/bookmark_blue.svg" title="Class" value="J.S.S 1 A" />
          <Card iconSrc="/icons/bookmark_blue.svg" title="School fees balance" value="N100,000" />
        </section>

          {/* register container */}
          <section className="flex xl:flex-row flex-col justify-between w-full xl:w-[95%] h-auto mb-3">

        {/* Registration  profile */}
        <section className=" w-full md:w-[95%] xl:w-[62%] flex flex-col gap-y-6 gap-x-0">

        <div className="block xl:hidden">
        <StudentRegisterDetails/>
        </div>
            <div className="flex lg:flex-row flex-col items-center gap-5 xl:gap-0 xl:justify-between w-full">
              {/* general profile */}
            <div className="bg-[#FFFFFF] w-full xl:w-[275px] h-auto sm:h-[324px] rounded-[15px] border border-[var(--border)] px-[15px] py-[16px] flex flex-col gap-[24px]">
              <h3 className="font-[600] text-[24px] leading-[38px] text-[var(--primary-text-color)]">General</h3>
              <section className="flex flex-col gap-[26px]">
              <div className="flex items-center gap-[16px]">
                <h6 className="font-[400] text-[18px] leading-[20px] text-[var(--grey)]">First Name:</h6>
                <p className="font-[400] text-[18px] leading-[20px] text-[var(--primary-text-color)]">Anita</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="font-[400] text-[18px] leading-[20px] text-[var(--grey)]">Last Name:</h6>
                <p className="font-[400] text-[18px] leading-[20px] text-[var(--primary-text-color)]">Nwosu</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="font-[400] text-[18px] leading-[20px] text-[var(--grey)]">Middle Name:</h6>
                <p className="font-[400] text-[18px] leading-[20px] text-[var(--primary-text-color)]">Ann</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="font-[400] text-[18px] leading-[20px] text-[var(--grey)]">Gender:</h6>
                <p className="font-[400] text-[18px] leading-[20px] text-[var(--primary-text-color)]">Female</p>
              </div>

              <div className="flex items-start sm:items-center sm:flex-row flex-col gap-y-2 gap-[10px]">
                <h6 className="font-[400] text-[18px] leading-[20px] text-[var(--grey)]">Date of Birth:</h6>
                <p className="font-[400] text-[18px] leading-[20px] text-[var(--primary-text-color)]">7th June 2000</p>
              </div>
              </section>
            </div>

            {/* Address profile */}
            <div className="bg-[#FFFFFF] w-full xl:w-[327px] h-full sm:h-[324px] rounded-[15px] border border-[var(--border)] px-[15px]  py-[16px] flex flex-col gap-[24px]">
              <h3 className="font-[600] text-[24px] leading-[38px] text-[var(--primary-text-color)]">Address</h3>
              <section className="flex flex-col gap-[24px]">
              <div className="flex items-start sm:items-center sm:flex-row flex-col gap-y-2 gap-[10px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Residential Address:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">5 divine street, G.R.A, Lagos state.</p>
              </div>

              <div className="flex items-center gap-[10px] sm:gap-[22px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Nationality:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">Nigerian</p>
              </div>

              <div className="flex items-center gap-[5px] sm:gap-[28px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">State of Origin:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">Lagos State</p>
              </div>

              <div className="flex items-start sm:items-center sm:flex-row flex-col gap-y-2 gap-[24px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Local Government:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">Badagry</p>
              </div>

              <div className="flex items-center gap-2 sm:gap-[24px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Town:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">Isale-eko</p>
              </div>
              </section>
            </div>
            </div>

           <div className="flex items-center flex-col lg:flex-row gap-x-6 gap-y-6 justify-between w-full">
             {/* Parent Information */}
             <div className="bg-[#FFFFFF] w-full lg:w-[450px] h-auto lg:h-[400px] rounded-[15px] border border-[var(--border)] px-[15px] py-[16px] flex flex-col gap-[24px]">
              <h3 className="font-[600] text-[24px] leading-[38px] text-[var(--primary-text-color)]">Parents’ Information</h3>
              <section className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Mother’s Name:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">A. Nwosu</p>
              </div>

              <div className="flex items-start sm:items-center sm:flex-row flex-col gap-y-2 gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Email:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">a.nwosu101@gmail.com</p>
              </div>

              <div className="flex items-start gap-y-3 sm:items-center sm:flex-row flex-col justify-between">
                <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Phone number:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">+2348097657897</p>
                </div>
                <button className="w-[120px] flex items-center justify-center h-[34px] rounded-[22px] px-[10px] py-[13px] bg-[var(--primary)] font-[700] text-[14px] leading-[20px] text-[var(--secondary-text-color)]">Message</button>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Father’s Name:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">A. Nwosu</p>
              </div>

              <div className="flex items-start sm:items-center sm:flex-row flex-col gap-y-2 gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Email:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">a.nwosu101@gmail.com</p>
              </div>

              <div className="flex items-start gap-y-3 sm:items-center sm:flex-row flex-col justify-between">
                <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Phone number:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">+2348097657897</p>
                </div>

                <button className="w-[120px] flex items-center justify-center h-[34px] rounded-[22px] px-[10px] py-[13px] bg-[var(--primary)] font-[700] text-[14px] leading-[20px] text-[var(--secondary-text-color)]">Message</button>
              </div>
              </section>
            </div>

            {/* Health */}
            <div className="bg-[#FFFFFF] h-auto w-full lg:w-[300px] lg:h-[400px] rounded-[15px] border border-[var(--border)] px-[15px] py-[16px] flex flex-col gap-[24px]">
              <h3 className="font-[600] text-[24px] leading-[38px] text-[var(--primary-text-color)]">Health</h3>
              <section className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Current Mediaction:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">Nil</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Health condition:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">Nil</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Genotype:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">AA</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Blood group:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">A+</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Allergies:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">None</p>
              </div>

              <div className="flex items-center gap-[16px]">
                <h6 className="text-[18px] leading-[20px] font-[400] text-[var(--grey)]">Disablities:</h6>
                <p className="text-[18px] font-400 leading-[20px] text-[var(--primary-text-color)]">None</p>
                </div>
              </section>
            </div>
           </div>
        </section>

        <div className="xl:block hidden">
        <StudentRegisterDetails/>
        </div>
        </section>
      </div>
    </>
  );
}

export default StudentProfile