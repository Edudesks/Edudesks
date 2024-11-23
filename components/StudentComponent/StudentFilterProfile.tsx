import React, { useState } from "react";
import Image from "next/image";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Checkbox,
} from "@mui/material";
import { CiFilter } from "react-icons/ci";
import GeneralButton from "../GeneralButton";

export default function StudentFilterProfile() {
  const [expanded, setExpanded] = useState<string>(""); // Tracks which filter section is expanded
  const [filters, setFilters] = useState<{
    name: string;
    age: number[];
    gender: string;
    fees: string;
    class: string;
    grade: string;
  }>({
    name: "",
    age: [0, 100],
    gender: "",
    fees: "",
    class: "",
    grade: "",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string>("");

  // Toggle a filter section (expand/collapse)
  const toggleExpand = (filter: string): void => {
    setExpanded((prev) => (prev === filter ? "" : filter));
  };

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
      name: "",
      age: [0, 100],
      gender: "",
      fees: "",
      class: "",
      grade: "",
    });
    setExpanded("");
  };

  // Apply filters (logs the current filter state)
  const handleApply = (): void => {
    console.log("Filters applied:", filters);
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

  // Alphabet A-Z Buttons for Name Filter
  const alphabetButtons = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .map((letter) => (
      <GeneralButton
        key={letter}
        buttonText={letter}
        onClick={() => handleFilterChange("name", letter)}
        className=""
        size="small"
        state={filters.name === letter ? "active" : "inactive"}
      />
    ));

  return (
    <div className="student-filter-profile">
      <div className="">
        {/* Class and Section Selection */}
      <header>
        <FormControl fullWidth>
          <InputLabel>Select Class</InputLabel>
          <Select
            value={filters.class}
            onChange={(e) => {
              const selected = e.target.value;
              handleFilterChange("class", selected);
              setSelectedClass(selected);
            }}
            label="Select Class"
          >
            {classOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedClass && (
          <FormControl fullWidth style={{ marginTop: "1rem" }}>
            <InputLabel>Select Section</InputLabel>
            <Select
              value={filters.grade}
              onChange={(e) => handleFilterChange("grade", e.target.value)}
              label="Select Section"
            >
              {sectionOptions[selectedClass]?.map((section) => (
                <MenuItem key={section} value={section}>
                  {section}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </header>

      {/* Filters Section */}
      <div className="filter-container">
        <h3 onClick={() => setIsFilterOpen((prev) => !prev)}>
          Filters <CiFilter />
        </h3>
        {isFilterOpen && (
          <div>
            {/* Name Filter */}
            <div className="filter-item">
              <Checkbox onClick={() => toggleExpand("name")} />
              <span>Name</span>
              <button onClick={() => toggleExpand("name")}>
                <Image
                  src={
                    expanded === "name"
                      ? "/icons/sub_icon.svg"
                      : "/icons/add_icon.svg"
                  }
                  alt="Toggle Icon"
                  width={20}
                  height={20}
                />
              </button>
              {expanded === "name" && (
                <div className="alphabet-buttons">{alphabetButtons}</div>
              )}
            </div>

            {/* Age Filter */}
            <div className="filter-item">
              <Checkbox onClick={() => toggleExpand("age")} />
              <span>Age</span>
              <button onClick={() => toggleExpand("age")}>
                <Image
                  src={
                    expanded === "age"
                      ? "/icons/sub_icon.svg"
                      : "/icons/add_icon.svg"
                  }
                  alt="Toggle Icon"
                  width={20}
                  height={20}
                />
              </button>
              {expanded === "age" && (
                <div className="filter-options">
                  <Slider
                    value={filters.age}
                    onChange={(e, newValue) =>
                      handleFilterChange("age", newValue as number[])
                    }
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>
              )}
            </div>

            {/* Gender Filter */}
            <div className="filter-item">
              <Checkbox onClick={() => toggleExpand("gender")} />
              <span>Gender</span>
              <button onClick={() => toggleExpand("gender")}>
                <Image
                  src={
                    expanded === "gender"
                      ? "/icons/sub_icon.svg"
                      : "/icons/add_icon.svg"
                  }
                  alt="Toggle Icon"
                  width={20}
                  height={20}
                />
              </button>
              {expanded === "gender" && (
                <div className="filter-options">
                  {["Male", "Female"].map((gender) => (
                    <GeneralButton
                      key={gender}
                      buttonText={gender}
                      className=""
                      size="medium"
                      state={filters.gender === gender ? "active" : "inactive"}
                      onClick={() => handleFilterChange("gender", gender)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Fees Filter */}
            <div className="filter-item">
              <span>School Fees</span>
              <button onClick={() => toggleExpand("fees")}>
                <Image
                  src={
                    expanded === "fees"
                      ? "/icons/sub_icon.svg"
                      : "/icons/add_icon.svg"
                  }
                  alt="Toggle Icon"
                  width={20}
                  height={20}
                />
              </button>
              {expanded === "fees" && (
                <div className="filter-options">
                  {["All", "Paid", "Not Paid", "Half Paid"].map((feeStatus) => (
                    <GeneralButton
                      key={feeStatus}
                      buttonText={feeStatus}
                      className=""
                      size="medium"
                      state={filters.fees === feeStatus ? "active" : "inactive"}
                      onClick={() => handleFilterChange("fees", feeStatus)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <GeneralButton
                buttonText="Reset All"
                onClick={handleReset}
                className=""
                size="medium"
                state="active"
              />
              <GeneralButton
                buttonText="Apply"
                onClick={handleApply}
                className=""
                size="medium"
                state="active"
              />
            </div>
          </div>
        )}
      </div>
      </div>

      
    </div>
  );
}
