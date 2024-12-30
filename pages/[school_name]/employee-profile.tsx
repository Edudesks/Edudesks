import EmployeeProfilePositionDetailsComponent from "@/components/EmployeeComponent/EmployeeProfilePositionDetails";
import EmployeeProfileImg from "@/components/EmployeeComponent/EmployeeProfileImage";
import EmployeeProfilePersonalDetailsComponent from "@/components/EmployeeComponent/EmployeeProfilePersonalDetails";
import EmployeeProfileContactDetailsComponent from "@/components/EmployeeComponent/EmployeeProfileContactDetailsComponent";
import EmployeeProfileEducationDetailsComponent from "@/components/EmployeeComponent/EmployeeProfileEducationDetailsComponent";
import EmployeeProfileSupportDetailsComponent from "@/components/EmployeeComponent/EmployeeProfileSupportDetailsComponent";
import EmployeeProfileButtonComponent from "@/components/EmployeeComponent/EmployeeProfileButton";
import { GoArrowLeft } from "react-icons/go";
import { inter, openSans } from "@/app/fonts/fonts";
import '@/styles/EmployeeProfileStyle/EmployeeProfile.css';
export default function EmployeeProfile (){
    return(
        <>
        <div className={`${openSans.className} bg-[white] rounded-[12px] w-[95%] p-3 m-2 sm:m-8 flex flex-col gap-8`}>
            <header className={`flex items-center gap-3 text-[var(--primary)]`}>
<GoArrowLeft className="text-[20px]"/>
<h3 className="text-[32px] font-medium">Joseph Olawole</h3>
            </header>

            <div className="flex justify-between gap-5 md:flex-nowrap flex-wrap">
            
<div className="flex flex-col gap-5">
<EmployeeProfileImg/>
<EmployeeProfileButtonComponent/>
</div>
            <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2">
            <div className="flex flex-col gap-3 w-full">
            <EmployeeProfilePersonalDetailsComponent/>
            <EmployeeProfilePositionDetailsComponent/>
            </div>
            <div className="flex flex-col gap-10 w-full">
            <EmployeeProfileContactDetailsComponent/>
            <EmployeeProfileEducationDetailsComponent/>
            <EmployeeProfileSupportDetailsComponent/>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}