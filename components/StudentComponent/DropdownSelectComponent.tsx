import {
  TextField,
  MenuItem,
  InputLabel,
  Select,
  NativeSelect,
  SxProps,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import "../../app/globals.css";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";

/**
 * * DropdownSelectComponent is a React functional component that renders a dropdown
 * TODO: Make the dropdown select component reusable
 * TODO: Fix placeholder
 */

const selectSx: SxProps = {
  "&.MuiInputBase-root": {
    width: "100%",
    borderRadius: "0.625rem",
    borderColor: "#E2E9F6",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E2E9F6",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E2E9F6",
      borderWidth: "1px",
    },
  },
  ".MuiSelect-select": {
    padding: "0.625rem",
    fontFamily: "Open Sans",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#E2E9F6", // Default border color
  },
};

const menuProps = {
  PaperProps: {
    sx: {
      backgroundColor: "#FFFFFF", // Menu background color
      borderRadius: "0.5625rem", // Rounded corners
      maxHeight: 156,
      paddingRight: "0.625rem", // Menu padding
    },
  },
  MenuListProps: {
    sx: {
      paddingX: "0.625rem", // Menu padding
      paddingY: "0.5rem",
      color: "#041822",
      "& .MuiMenuItem-root": {
        fontFamily: "Open Sans",
        "&:hover": {
          backgroundColor: "#E0EBF4", // Hover effect for menu items
          borderRadius: "22px",
        },
        "&:focus": {
          outline: "none",
          backgroundColor: "transparent",
        },
        "&.Mui-selected": {
          backgroundColor: "transparent", // Selected menu item background
          "&:hover": {
            backgroundColor: "#E0EBF4", // Hover effect for selected menu item
          },
          "&:focus": {
            //   outline: "none",
            backgroundColor: "#E0EBF4",
            borderRadius: "22px",
          },
        },
      },
    },
  },
};

const classes = [
  "Creche",
  "Nursery",
  "Kindergarten",
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
  "Junior Secondary 1",
  "Junior Secondary 2",
  "Junior Secondary 3",
  "Senior Secondary 1",
  "Senior Secondary 2",
  "Senior Secondary 3",
];

const DropdownSelectComponent = () => {
  const [studentClass, setStudentClass] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof studentClass>) => {
    setStudentClass(event.target.value)
  };

  return (
    <div className="flex flex-col gap-[0.4375rem]">
      <InputLabel
        id="student-classes"
        className="text-sm text-[var(--primary-text-color)]"
        sx={{ fontFamily: "Open Sans" }}
      >
        Classes*
      </InputLabel>
      <Select
        placeholder="Select Class"
        labelId="student-classes"
        id="select"
        value={studentClass}
        sx={selectSx}
        IconComponent={KeyboardArrowDown}
        MenuProps={menuProps}
        onChange={handleChange}
        renderValue={(selected) => {
          if (!selected) {
            return <em>Select class</em>;
          }
          return selected;
        }}
      >
        <MenuItem disabled value="">
          <em>Select class</em>
        </MenuItem>
        {classes.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropdownSelectComponent;
