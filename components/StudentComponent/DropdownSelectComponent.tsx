import {
  TextField,
  MenuItem,
  InputLabel,
  Select,
  SxProps,
  SelectChangeEvent,
} from "@mui/material";
import React, { forwardRef } from "react";
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

interface DropdownSelectComponentProps {
  name: string;
  value?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
  error?: string;
  options: string[];
}

const DropdownSelectComponent = forwardRef<
  HTMLInputElement,
  DropdownSelectComponentProps
>(({ name, value, onChange, error, options }, ref) => {

  console.log("Dropdown Props: ", { name, value, error, options });
  console.log("Dropdown value:", value);
  const handleChange = (event: SelectChangeEvent<string>) => {
    if (onChange) {
      onChange({
        target: {
          name: name || "",
          value: event.target.value,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="flex flex-col gap-[0.4375rem]">
      <InputLabel
        id={`${name}-label`}
        className="text-sm text-[var(--primary-text-color)]"
        sx={{ fontFamily: "Open Sans" }}
      >
        Classes*
      </InputLabel>
      <Select
        placeholder="Select Class"
        labelId="student-classes"
        id={name}
        name={name}
        value={value || ""}
        sx={selectSx}
        IconComponent={KeyboardArrowDown}
        MenuProps={menuProps}
        onChange={handleChange}
        inputRef={ref}
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
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
});

DropdownSelectComponent.displayName = "DropdownSelectComponent";

export default DropdownSelectComponent;
