import React, { useState, useEffect} from "react";
import { Slider, Checkbox } from "@mui/material";
import Image from "next/image";
import { CiFilter } from "react-icons/ci";
import GeneralButton from "../GeneralButton";
import StudentFilter3 from "./StudentFilter3";

export default function StudentFilter2() {
  const [filters, setFilters] = useState<{
    all: string;
    name: string;
    age: number[];
    gender: string;
    fees: string;
    class: string;
    grade: string;
  }>({
    all: "",
    name: "",
    age: [0, 100],
    gender: "",
    fees: "",
    class: "",
    grade: "",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]); // Track expanded sections
  const [allFilter, setAllFilter] = useState(false); // Track All Category checkbox

  // Toggle filter section expansion
  const toggleExpand = (filter: string) => {
    setExpanded((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  // Handle "All Category" toggle
  const handleAllFilter = () => {
    setAllFilter((prev) => !prev);
    if (!allFilter) {
      // If "All Category" is checked, expand all sections and check them
      setExpanded(["all", "name", "age", "gender", "fees", "class", "grade"]);
      setFilters({
        ...filters,
        all:"All",
        name: "All",
        age: [0, 100],
        gender: "All",
        fees: "All",
        class: "All",
        grade: "All",
      });
    } else {
      // If "All Category" is unchecked, reset expanded sections and clear filter values
      setExpanded([]);
      setFilters({
        ...filters,
        all:'',
        name: "",
        age: [0, 100],
        gender: "",
        fees: "",
        class: "",
        grade: "",
      });
    }
  };

  // Update individual filter state
  const handleFilterChange = (
    key: string,
    value: string | number | number[]
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  // Reset all filters
  const handleReset = () => {
    setFilters({
      all: "",
      name: "",
      age: [0, 100],
      gender: "",
      fees: "",
      class: "",
      grade: "",
    });
    setExpanded([]);
    setAllFilter(false);
  };

  // Apply filters
  const handleApply = () => {
    console.log("Filters applied:", filters);
  };

  // Alphabet A-Z Buttons for Name Filter
  const alphabetButtons = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .map((letter) => (
      <GeneralButton
        key={letter}
        buttonText={letter}
        onClick={() => handleFilterChange("name", letter)}
        className="border-none w-[25px] h-[25px] rounded-[3px] p-[8px]"
        size="small"
        state={filters.name === letter ? "active" : "inactive"}
        icon={null}
      />
    ));

    const [primaryFilter, setPrimaryFilter] = useState(false)
    const [SecondaryFilter, setSecondaryFilter] = useState(false)
    const handleClassFilter = (placeholder:string) =>{
      if (placeholder === 'Primary'){
        setPrimaryFilter(prev=>!prev)
        setSecondaryFilter(false)
      }
      else if (placeholder === 'Secondary')
      {
        setSecondaryFilter(prev=>!prev)
        setPrimaryFilter(false)
      }
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
      const isBelow390 = windowWidth <= 390;
  return (
    <>
     <div
  className={`w-[466px] flex ${isBelow390 ? 'flex-col':'flex-row'}`}
>
        <div className="h-[55px]">
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="hover:cursor-pointer flex items-center w-[120px] h-full  pl-2 justify-between pr-2 rounded-[8px] bg-[var(--secondary-text-color)] shadow-[0px_4px_4px_1px_rgba(138,135,135,0.3)]"
          >
            <p className="text-[var(--grey)] text-[18px]">Filters</p>
            <CiFilter className="text-[25px]" />
          </button>
        </div>
        {isFilterOpen && (
          <div className={`flex items-center gap-2 relative`}>
          <div className={`w-[200px] h-auto bg-[var(--secondary-text-color)] border border-[#FAFAFA] absolute left-[.4rem] top-[0rem] shadow-[0px_4px_4px_1px_rgba(138,135,135,0.3)] rounded-[4px] flex flex-col gap-2 ${
    expanded.includes("all") ||
    expanded.includes("name") ||
    expanded.includes("age") ||
    expanded.includes("gender") ||
    expanded.includes("fees") ||
    expanded.includes("class") ||
    expanded.includes("grade")
      ? "sm:flex hidden"
      : ""
  } ${isBelow390?'w-[180px] top-2':'w-[200px]'}`}>
           {/* All category filter */}
  <div className="bg-[white] p-[8px]">
    <Checkbox onClick={handleAllFilter} checked={allFilter} />
    <span className="leading-[20px]">All Category</span>
  </div>

            {/* Name Filter */}
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                <Checkbox
                  checked={expanded.includes("name")}
                  onClick={() => toggleExpand("name")}
                />
                <span>Name</span>
                </div>
                <button onClick={() => toggleExpand("name")}>
  {!expanded.includes("name") && (
    <Image
      src="/icons/add_icon.svg"
      alt="Add Icon"
      width={20}
      height={20}
    />
  )}
</button>

              </div>

            {/* Age Filter */}
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                <Checkbox
                  checked={expanded.includes("age")}
                  onClick={() => toggleExpand("age")}
                />
                <span>Age</span></div>
                <button onClick={() => toggleExpand("age")}>
                {!expanded.includes("age") && (
                <Image
      src="/icons/add_icon.svg"
      alt="Add Icon"
      width={20}
      height={20}
    />)}
                </button>
              </div>

            {/* Gender Filter */}
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                <Checkbox
                  checked={expanded.includes("gender")}
                  onClick={() => toggleExpand("gender")}
                />
                <span>Gender</span></div>
                <button onClick={() => toggleExpand("gender")}>
                {!expanded.includes("gender") && (
                <Image
      src="/icons/add_icon.svg"
      alt="Add Icon"
      width={20}
      height={20}
    />)}
                </button>
              </div>

            {/* Fees Filter */}
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                <Checkbox
                  checked={expanded.includes("fees")}
                  onClick={() => toggleExpand("fees")}
                />
                <span>School Fees</span></div>
                <button onClick={() => toggleExpand("fees")}>
                {!expanded.includes("fees") && (
                <Image
      src="/icons/add_icon.svg"
      alt="Add Icon"
      width={20}
      height={20}
    />)}
                </button>
              </div>

             {/* Class Filter */}
      <div className="flex items-center bg-[white] p-[8px] justify-between">
        <div className="">
        <Checkbox
          checked={expanded.includes("class")}
          onClick={() => toggleExpand("class")}
        />
        <span>Class/ Section</span></div>
        <button onClick={() => toggleExpand("class")}>
        {!expanded.includes("class") && (
        <Image
      src="/icons/add_icon.svg"
      alt="Add Icon"
      width={20}
      height={20}
    />)}
        </button>
      </div>

            {/* Grade Filter */}
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                <Checkbox
                  checked={expanded.includes("grade")}
                  onClick={() => toggleExpand("grade")}
                />
                <span>Grade</span></div>
                <button onClick={() => toggleExpand("grade")}>
                {!expanded.includes("grade") && (
                <Image
      src="/icons/add_icon.svg"
      alt="Add Icon"
      width={20}
      height={20}
    />)}
                </button>
              </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between bg-[white]">
              <GeneralButton
                buttonText="Reset All"
                onClick={handleReset}
                size="medium"
                state="active"
                icon={null}
                className="bg-transparent w-full text-[#041822] p-[10px] rounded-[4px] mt-4 border-0 border-none"
              />
              <GeneralButton
                buttonText="Apply"
                onClick={handleApply}
                size="medium"
                state="active"
                icon={null}
                className="bg-[var(--primary-text-color)] w-full  text-[#fff] p-[10px] rounded-[3rem] mt-4 ml-2"
              />
            </div>
          </div>
          <StudentFilter3
  handleAllFilter={handleAllFilter}
  toggleExpand={toggleExpand}
  allFilter={allFilter}
  expanded={expanded}
  alphabetButtons={alphabetButtons}
  filters={filters}
  handleFilterChange={handleFilterChange}
  handleClassFilter={handleClassFilter}
  primaryFilter={primaryFilter}
  secondaryFilter={SecondaryFilter}
/>

</div>
        )}
      </div>
    </>
  );
}
