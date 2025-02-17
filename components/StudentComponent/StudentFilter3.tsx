import { Slider, Checkbox, CheckboxProps } from "@mui/material";
import GeneralButton from "../GeneralButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 2,
  width: 13,
  height: 13,
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#4B8BBE",
  backgroundImage: `url("/icons/checkmark.svg")`,
  backgroundPosition: "center",
  color: "white",
  backgroundRepeat: "no-repeat",
  width: 13,
  height: 13,
});
interface StudentFilter3Props {
  handleAllFilter: () => void;
  toggleExpand: (placeholder: string) => void;
  allFilter: boolean;
  expanded: string[];
  alphabetButtons: JSX.Element[];
  filters: {
    age: number[];
    gender: string;
    fees: string;
    class: string;
    grade: string;
    name: string;
  };
  handleFilterChange: (key: string, value: string | number | number[]) => void;
  handleClassFilter: (placeholder: string) => void;
  primaryFilter: boolean;
  secondaryFilter: boolean;
}

const StudentFilter3: React.FC<StudentFilter3Props> = ({
  handleAllFilter,
  toggleExpand,
  allFilter,
  expanded,
  alphabetButtons,
  filters,
  handleFilterChange,
  handleClassFilter,
  primaryFilter,
  secondaryFilter,
}) => {
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
      {(expanded.includes("all") ||
        expanded.includes("name") ||
        expanded.includes("age") ||
        expanded.includes("gender") ||
        expanded.includes("fees") ||
        expanded.includes("class") ||
        expanded.includes("grade")) && (
        <div
          className={`h-auto bg-[var(--secondary-text-color)] border border-[#FAFAFA] absolute top-0 left-[.4rem] sm:left-[13rem] rounded-[4px] flex flex-col gap-2 shadow-[0px 4px 4px 2px rgba(142, 142, 142, 0.25)] ${
            isBelow390 ? "w-[180px]  top-2" : "w-[266px]"
          }`}
        >
          {/* All filter */}
          {expanded.includes("all") && (
            <div className="flex items-center bg-[white] p-[8px]">
              <Checkbox
                onClick={handleAllFilter}
                checked={allFilter}
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
              />
              <span className="leading-[20px]">All Category</span>
            </div>
          )}

          {/* Name filter */}
          {expanded.includes("name") && (
            <div className="alphabet-buttons">
              <section className="bg-[white] px-1.5 py-2 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="">
                    <Checkbox
                      checked={expanded.includes("name")}
                      onClick={() => toggleExpand("name")}
                      checkedIcon={<BpCheckedIcon />}
                      icon={<BpIcon />}
                    />
                    <span className="text-xs">Name</span>
                  </div>
                  <button onClick={() => toggleExpand("name")}>
                    {expanded.includes("name") && (
                      <Image
                        src="/icons/sub_icon.svg"
                        alt="Add Icon"
                        width={20}
                        height={20}
                      />
                    )}
                  </button>
                </div>
                <p className="flex items-center w-full flex-wrap gap-1 leading-5">
                  {alphabetButtons}
                </p>
              </section>
            </div>
          )}

          {/* Age filter */}
          {expanded.includes("age") && (
            <div className="filter-options">
              <section className="bg-[white] p-[8px] flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="">
                    <Checkbox
                      checked={expanded.includes("age")}
                      onClick={() => toggleExpand("age")}
                      checkedIcon={<BpCheckedIcon />}
                      icon={<BpIcon />}
                    />
                    <span>Age</span>
                  </div>
                  <button onClick={() => toggleExpand("age")}>
                    {expanded.includes("age") && (
                      <Image
                        src="/icons/sub_icon.svg"
                        alt="Add Icon"
                        width={20}
                        height={20}
                      />
                    )}
                  </button>
                </div>
                <Slider
                  value={filters.age}
                  onChange={(e, newValue) =>
                    handleFilterChange("age", newValue as number[])
                  }
                  valueLabelDisplay="auto"
                  min={2}
                  max={18}
                  marks={[
                    { value: 2, label: "2" },
                    { value: 8, label: "8" },
                    { value: 10, label: "10" },
                    { value: 14, label: "14" },
                    { value: 16, label: "16" },
                    { value: 18, label: "18" },
                  ]}
                  className="text-[var(--grey-700)] h-0"
                  sx={{
                    "& .MuiSlider-thumb": {
                      display: "none",
                    },
                    "& .MuiSlider-mark": {
                      display: "none",
                    },
                    "& .MuiSlider-markLabel": {
                      fontSize: "10px",
                      color: "#041822",
                      fontWeight: 400,
                      fontFamily: "Open Sans",
                      lineHeight: '20px'
                    },
                    "& .MuiSlider-mark[data-index='1'], & .MuiSlider-mark[data-index='4']":
                      {
                        display: "block",
                        width: 8,
                        height: 8,
                        backgroundColor: "var(--grey-700)",
                      },
                  }}
                />
              </section>
            </div>
          )}

          {/* Gender filter */}
          {expanded.includes("gender") && (
            <section className="bg-[white] p-[8px] flex flex-col">
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("gender")}
                    onClick={() => toggleExpand("gender")}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span>Gender</span>
                </div>
                <button onClick={() => toggleExpand("gender")}>
                  {expanded.includes("gender") && (
                    <Image
                      src="/icons/sub_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>
              <section className="flex items-center justify-between gap-1 lg:flex-nowrap flex-wrap">
                {["All", "Male", "Female"].map((gender) => (
                  <GeneralButton
                    key={gender}
                    buttonText={gender}
                    size="medium"
                    state={filters.gender === gender ? "active" : "inactive"}
                    onClick={() => handleFilterChange("gender", gender)}
                    icon={null}
                    className="w-full border-none"
                  />
                ))}
              </section>
            </section>
          )}

          {/* Fees filter */}
          {expanded.includes("fees") && (
            <section className="bg-[white] p-[8px] flex flex-col">
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("fees")}
                    onClick={() => toggleExpand("fees")}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span>School Fees</span>
                </div>
                <button onClick={() => toggleExpand("fees")}>
                  {expanded.includes("fees") && (
                    <Image
                      src="/icons/sub_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>
              <section className="flex items-center justify-between gap-1 flex-wrap">
                {["All", "Paid", "Not Paid", "Half Paid"].map((feeStatus) => (
                  <GeneralButton
                    key={feeStatus}
                    buttonText={feeStatus}
                    size="medium"
                    state={filters.fees === feeStatus ? "active" : "inactive"}
                    onClick={() => handleFilterChange("fees", feeStatus)}
                    icon={null}
                    className="border-none"
                  />
                ))}
              </section>
            </section>
          )}

          {/* Class filter */}
          {expanded.includes("class") && (
            <section className="bg-[white] p-[8px] flex flex-col">
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("class")}
                    onClick={() => toggleExpand("class")}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span>Class/ Section</span>
                </div>
                <button onClick={() => toggleExpand("class")}>
                  {expanded.includes("class") && (
                    <Image
                      src="/icons/sub_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between gap-1 flex-wrap lg:flex-nowrap">
                <GeneralButton
                  buttonText="Primary"
                  onClick={() => handleClassFilter("Primary")}
                  size="large"
                  state={primaryFilter ? "active" : "inactive"}
                  icon={null}
                  className="w-full p-[10px] rounded-[4px] mt-4 border-none"
                />
                <GeneralButton
                  buttonText="Secondary"
                  onClick={() => handleClassFilter("Secondary")}
                  size="large"
                  state={secondaryFilter ? "active" : "inactive"}
                  icon={null}
                  className="w-full p-[10px] rounded-[4px] mt-4 border-none"
                />
              </div>
              {primaryFilter && (
                <ul>
                  {[
                    "Primary 1",
                    "Primary 2",
                    "Primary 3",
                    "Primary 4",
                    "Primary 5",
                    "Primary 6",
                  ].map((primaryClass) => (
                    <li key={primaryClass}>
                      {primaryClass} <Checkbox />
                    </li>
                  ))}
                </ul>
              )}
              {secondaryFilter && (
                <ul>
                  {[
                    "Secondary 1",
                    "Secondary 2",
                    "Secondary 3",
                    "Senior Secondary 1",
                    "Senior Secondary 2",
                    "Senior Secondary 3",
                  ].map((secondaryClass) => (
                    <li key={secondaryClass}>
                      {secondaryClass} <Checkbox />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* Grade filter */}
          {expanded.includes("grade") && (
            <section className="bg-[white] p-[8px] flex flex-col">
              <div className="flex items-center bg-[white] p-[8px] justify-between">
                <div className="">
                  <Checkbox
                    checked={expanded.includes("grade")}
                    onClick={() => toggleExpand("grade")}
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                  />
                  <span>Grade</span>
                </div>
                <button onClick={() => toggleExpand("grade")}>
                  {expanded.includes("grade") && (
                    <Image
                      src="/icons/sub_icon.svg"
                      alt="Add Icon"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>
              <section className="flex items-center justify-between gap-1 flex-wrap">
                {["All", "A", "B", "C", "D", "E", "F"].map((grade) => (
                  <GeneralButton
                    key={grade}
                    buttonText={grade}
                    size="medium"
                    state={filters.grade === grade ? "active" : "inactive"}
                    onClick={() => handleFilterChange("grade", grade)}
                    icon={null}
                    className="border-none"
                  />
                ))}
              </section>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default StudentFilter3;
