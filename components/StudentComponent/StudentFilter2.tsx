import React, { useState, useEffect } from "react";
import { Slider, Checkbox } from "@mui/material";
import Image from "next/image";
import { CiFilter } from "react-icons/ci";
import GeneralButton from "../GeneralButton";
import StudentFilter3 from "./StudentFilter3";
import { styled } from "@mui/material/styles";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 2,
  width: 13,
  height: 13,
  borderColor: "#E2E9F6",
  borderWidth: "1px",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#4B8BBE",
  backgroundImage: `url("/icons/checkmark.svg")`,
  backgroundPosition: "center",
  color: "white",
  backgroundRepeat: "no-repeat",
  width: 13,
  height: 13,
  border: "none",
});

export default function StudentFilter2() {
  const [filters, setFilters] = useState<{
    all: string;
    name: string;
    age: number;
    gender: string;
    fees: string;
    class: string;
    grade: string;
  }>({
    all: "",
    name: "",
    age: 10,
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
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
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
        all: "All",
        name: "All",
        age: 10,
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
        all: "",
        name: "",
        age: 10,
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
    value: string | number | number
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
      age: 10,
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
        className="border-none rounded-[3px] text-[#041822] w-[19px] font-medium hover:bg-[var(--primary)] text-[10px] px-1 py-1 h-full"
        size="small"
        state={filters.name === letter ? "active" : "plain"}
        icon={null}
      />
    ));

  const [primaryFilter, setPrimaryFilter] = useState(false);
  const [SecondaryFilter, setSecondaryFilter] = useState(false);
  const handleClassFilter = (placeholder: string) => {
    if (placeholder === "Primary") {
      setPrimaryFilter((prev) => !prev);
      setSecondaryFilter(false);
    } else if (placeholder === "Secondary") {
      setSecondaryFilter((prev) => !prev);
      setPrimaryFilter(false);
    }
  };

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
        className={`w-[466px] flex ${
          isBelow390 ? "flex-col" : "flex-row"
        } font-Open-Sans`}
      >
        <div className="h-[55px]">
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="hover:cursor-pointer flex items-center w-[120px] h-full  pl-2 justify-between pr-2 rounded-[8px] bg-[var(--secondary-text-color)] shadow-[0px_4px_4px_1px_rgba(138,135,135,0.3)]"
          >
            <p className="text-[var(--grey)] text-[18px]">Filter</p>
            <CiFilter className="text-[25px]" />
          </button>
        </div>
        {/* -------- filter dropdown options -------- */}
        {isFilterOpen && (
          <div className={`flex items-center gap-2 relative`}>
            <div
              className={`w-[266px] h-auto bg-[var(--secondary-text-color)] border border-[#FAFAFA] absolute left-[.4rem] top-[0rem] shadow-[0px_4px_4px_1px_rgba(138,135,135,0.3)] rounded-[4px] flex flex-col gap-2 ${
                expanded.includes("all") ||
                expanded.includes("name") ||
                expanded.includes("age") ||
                expanded.includes("gender") ||
                expanded.includes("fees") ||
                expanded.includes("class") ||
                expanded.includes("grade")
                  ? "sm:flex hidden"
                  : ""
              } ${isBelow390 ? "w-[180px] top-2" : "w-[200px]"}`}
            >
              {/* All category filter */}
              <div className="bg-[white] px-2 py-2.5">
                <Checkbox
                  onClick={handleAllFilter}
                  checked={allFilter}
                  className="text-[#E2E9F6]"
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <span className="leading-5 text-xs text-[var(--primary-text-color)] font-normal">All Category</span>
              </div>

              {/* Name Filter */}
              <div className="flex items-center bg-[white] px-2 py-2.5 justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("name")}
                    onClick={() => toggleExpand("name")}
                    className="text-[#E2E9F6]"
                    sx={{ borderRadius: "3px" }}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span className="leading-5 text-xs text-[var(--primary-text-color)] font-normal">Name</span>
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
              <div className="flex items-center bg-[white] px-2 py-2.5 justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("age")}
                    onClick={() => toggleExpand("age")}
                    className="text-[#E2E9F6]"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span className="leading-5 text-xs text-[var(--primary-text-color)] font-normal">Age</span>
                </div>
                <button onClick={() => toggleExpand("age")}>
                  {!expanded.includes("age") && (
                    <Image
                      src="/icons/add_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>

              {/* Gender Filter */}
              <div className="flex items-center bg-[white] px-2 py-2.5 justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("gender")}
                    onClick={() => toggleExpand("gender")}
                    className="text-[#E2E9F6]"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span className="leading-5 text-xs text-[var(--primary-text-color)] font-normal">Gender</span>
                </div>
                <button onClick={() => toggleExpand("gender")}>
                  {!expanded.includes("gender") && (
                    <Image
                      src="/icons/add_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>

              {/* Fees Filter */}
              <div className="flex items-center bg-[white] px-2 py-2.5 justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("fees")}
                    onClick={() => toggleExpand("fees")}
                    className="text-[#E2E9F6]"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span className="leading-5 text-xs text-[var(--primary-text-color)] font-normal">School Fees</span>
                </div>
                <button onClick={() => toggleExpand("fees")}>
                  {!expanded.includes("fees") && (
                    <Image
                      src="/icons/add_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>

              {/* Class Filter */}
              <div className="flex items-center bg-[white] px-2 py-2.5 justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("class")}
                    onClick={() => toggleExpand("class")}
                    className="text-[#E2E9F6]"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span className="leading-5 text-xs text-[var(--primary-text-color)] font-normal">Class/ Section</span>
                </div>
                <button onClick={() => toggleExpand("class")}>
                  {!expanded.includes("class") && (
                    <Image
                      src="/icons/add_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>

              {/* Grade Filter */}
              <div className="flex items-center bg-[white] px-2 py-2.5 justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("grade")}
                    onClick={() => toggleExpand("grade")}
                    className="text-[#E2E9F6]"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span className="leading-5 text-xs text-[var(--primary-text-color)] font-normal">Grade</span>
                </div>
                <button onClick={() => toggleExpand("grade")}>
                  {!expanded.includes("grade") && (
                    <Image
                      src="/icons/add_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between bg-[white] px-3 py-2">
                <GeneralButton
                  buttonText="Reset All"
                  onClick={handleReset}
                  size="medium"
                  state="plain"
                  icon={null}
                  className="bg-transparent w-full text-sm whitespace-nowrap text-[#002F49] p-[10px] rounded-[4px] border-0 border-none hover:text-[#041822]"
                />
                <GeneralButton
                  buttonText="Apply"
                  onClick={handleApply}
                  size="medium"
                  state="active"
                  icon={null}
                  className="bg-[var(--primary)] w-full border-none text-[#fff] p-[10px] rounded-[3rem]"
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
