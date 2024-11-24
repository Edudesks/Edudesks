import React, { useState, useEffect} from "react";
import {
  FormControl,
  MenuItem,
} from "@mui/material";
import GeneralButton from "../GeneralButton";
import { BsPersonPlus } from "react-icons/bs";
import { inter, openSans } from "@/app/fonts/fonts";
import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import { BiSolidDownArrow} from "react-icons/bi";
import StudentFilter2 from "./StudentFilter2";
export default function StudentFilterProfile() {
 
  const [expanded, setExpanded] = useState<string>(""); // Tracks which filter section is expanded
  
  const [selectedClass, setSelectedClass] = useState<string>("Primary");

  const [filters, setFilters] = useState<{
    all:string;
    name: string;
    age: number[];
    gender: string;
    fees: string;
    class: string;
    grade: string;
  }>({
    all:'',
    name: "",
    age: [0, 100],
    gender: "",
    fees: "",
    class: "",
    grade: "",
  });

    // Update a specific filter
    const handleFilterChange = (
      key: string,
      value: string | number | number[]
    ): void => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    };
  
    // Reset all filters
    const handleReset = (): void => {
      setFilters({
        all:'',
        name: "",
        age: [0, 100],
        gender: "",
        fees: "",
        class: "",
        grade: "",
      });
      setExpanded("");
    };

  // Class and Section Options
  const classOptions = ["Primary", "Secondary"];
  const sectionOptions: Record<string, string[]> = {
    Primary: [
      "Primary 1",
      "Primary 2",
      "Primary 3",
      "Primary 4",
      "Primary 5",
      "Primary 6",
    ],
    Secondary: [
      "Secondary 1",
      "Secondary 2",
      "Secondary 3",
      "Secondary 4",
      "Secondary 5",
      "Secondary 6",
    ],
  };


    const [selectOpen, setSelectOpen] = useState<boolean>(false)
    const handleSelectOpen = ()=>{
      setSelectOpen(prev=>!prev)
    }
    const [selectOpen2, setSelectOpen2] = useState<boolean>(false)
    const handleSelectOpen2 = () => {
      setSelectOpen2(prev=>!prev)
    }

    const [windowWidth, setWindowWidth] = useState<number>(0);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
        const updateWindowWidth = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
      }
    }, []);

    const isBelow1184 = windowWidth <= 1184;
    const isBelow390 = windowWidth <= 390;
    const isBelow310 = windowWidth <= 310;

  return (
    <div
      className={`${openSans.className} flex items-center px-4 mt-[2rem] w-full justify-between`}
    >
      {/* filters container */}
      <div className={`flex gap-5 sm:w-full w-[20rem] ${isBelow1184?'flex-col items-start':'items-center'} ${isBelow390?'w-[15rem]':''} ${isBelow310?'w-[13rem]':''}`}>

       {/* Class and Section Selection */}
<header className={`flex flex-col gap-1 ${isBelow390?'w-[150px]':'w-[200px]'}`}>
  <h3 className="text-[var(--grey)] text-[16px] leading-[20px]">
    Select Class
  </h3>
  <FormControl className="w-full">
    <button
      onClick={handleSelectOpen}
      className="flex items-center w-full justify-between p-[11px] rounded-[8px] text-[var(--grey)] text-[18px] bg-[var(--secondary-text-color)] border-0 outline-none shadow-[0px_4px_4px_1px_rgba(138,135,135,0.3)]"
    >
      Select
      {!selectOpen?<IoIosArrowDown className="text-[28px]" />:<IoIosArrowUp/>}
    </button>
    <div className={`flex flex-col p-[4px] mt-2 ${selectOpen?'bg-[white]':''}`}>
    {selectOpen && (
     <div className="flex items-center">
     <button
       value={filters.class}
       onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
         const selected = (e.target as HTMLButtonElement).value;
         handleFilterChange("class", selected);
         setSelectedClass(selected);
         setSelectOpen2(!selectOpen2); 
       }}
       className="w-auto gap-2 flex items-center justify-between border border-[var(--border)] p-2"
     >
       {selectedClass}
       <BiSolidDownArrow className="text-[14px]"/>
     </button>
   
     {selectOpen2 && (
       <div className="shadow-lg mt-1 rounded-lg w-full">
         {classOptions.map((option) => (
           <MenuItem
             key={option}
             value={option}
             onClick={() => {
               handleFilterChange("class", option);
               setSelectedClass(option);
               setSelectOpen2(false); // Close after selection
             }}
             className="p-2 cursor-pointer hover:bg-gray-200"
           >
             {option}
           </MenuItem>
         ))}
       </div>
     )}
   </div>
   
    )}

    {/* Sub Select Class */}
    {selectedClass && selectOpen && (
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 ">
          {sectionOptions[selectedClass]?.map((section) => (
            <div
              key={section}
              className={`cursor-pointer px-4 py-2 rounded text-[var(--primary-text-color)] w-full hover:cursor-pointer hover:bg-[#E0EBF4] ${
                filters.grade === section
                  ? "bg-[#E0EBF4]"
                  : "bg-white"
              }`}
              onClick={() => handleFilterChange("grade", section)}
            >
              {section}
            </div>
          ))}
        </div>
      </div>
    )}</div>
  </FormControl>
</header>


        {/* Filters Section */}
       <StudentFilter2/>
      </div>

      <div className="">
        <GeneralButton
          buttonText="Add new student"
          className="w-[202px] h-[50px] p-[12px] hidden xl:flex items-center"
          size="large"
          state="active"
          icon={BsPersonPlus}
        />
        <GeneralButton
          buttonText=""
          className="w-auto h-[50px] p-[12px] xl:hidden block rounded-[6px]"
          size="large"
          state="active"
          icon={BsPersonPlus}
        />
      </div>
    </div>
  );
}
