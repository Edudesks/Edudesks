import React, { useState, forwardRef } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { CalendarMonthOutlined, KeyboardArrowDown } from "@mui/icons-material";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { TextField } from "@mui/material";
import { date } from "zod";

/**
 * CalendarComponent is a React functional component that renders a date picker
 * using Material-UI's DatePicker component. It allows users to select a date
 * with the following features:
 *
 * - The selected date is managed using the `selectedDate` state.
 * - The date picker is restricted to dates up to the current date (`today`).
 * - The date picker displays year, month, and day views.
 * - Customizes the open picker icon to use `CalendarMonthOutlined`.
 * - Customizes the text field's SVG icon color to red.
 *
 * Note: The `popperProps` property has been removed in the latest version of MUI.
 * Instead, you can use `componentsProps.popper` to pass props to the Popper component.
 *
 * @returns {JSX.Element} The rendered date picker component.
 */

interface CalendarComponentProps {
  variant: "dashboard" | "form";
  error?: string;
  value?: string;
  onChange?: (event: {
    target: { name?: string; value: string | null };
  }) => void;
  name?: string;
}

const CalendarComponent = forwardRef<HTMLInputElement, CalendarComponentProps>(
  ({ variant, error, value, onChange, name }, ref) => {
    const today = new Date();

    const actualDate = (date: Date) => {
      const normalizedDate = new Date(date);
      normalizedDate.setHours(0, 0, 0, 0);
      const year = normalizedDate.getFullYear();
      const month = String(normalizedDate.getMonth() + 1).padStart(2, "0");
      const day = String(normalizedDate.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const handleDateChange = (newDate: Date | null) => {
      if (onChange) {
        onChange({
          target: {
            name,
            value: newDate ? actualDate(newDate) : null,
          },
        });
      }
    };
    console.log("CalendarComponent name prop:", name);

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
        <DatePicker
          value={value ? new Date(value) : null}
          onChange={handleDateChange}
          maxDate={today}
          views={["year", "month", "day"]}
          dayOfWeekFormatter={(date) => format(date, "EEE").toUpperCase()}
          slots={{
            openPickerIcon: CalendarMonthOutlined,
            switchViewButton: KeyboardArrowDown,
          }}
          slotProps={{
            textField: {
              inputRef: ref,
              name,
              // error: !!error,
              placeholder:
                variant === "dashboard" ? "Date Range" : "DD/MM/YYYY",
              fullWidth: true,
              sx: {
                // -------- custom styles for the text field --------
                // -------- calender icon --------
                "& .MuiSvgIcon-root": { color: "#59676E" },
                // -------- input box without icon --------
                ".MuiInputBase-input": {
                  fontFamily: "Open Sans",
                  ":focus": { outline: "none" },
                  padding: variant === "dashboard" ? "0.5625rem" : "0.625rem",
                },
                // -------- text field container (input + icon) --------
                ".MuiOutlinedInput-root, .MuiTextField-root": {
                  borderRadius:
                    variant === "dashboard" ? "1.375rem" : "0.625rem",
                  display: variant === "dashboard" ? "flex" : "",
                  flexDirection: variant === "dashboard" ? "row-reverse" : "",
                  marginX: variant === "dashboard" ? "auto" : "",
                },
                // ".MuiTextField-root, .MuiFormControl-root": {
                //   width: "100%",
                // },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E2E9F6", // Default border color
                },
                // -------- Removes the border on hover --------
                ".MuiOutlinedInput-root": {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E2E9F6",
                  },
                  // -------- Removes the border on active (focus) --------
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E2E9F6",
                    borderWidth: "1px",
                  },
                },
              },
            },
            // -------- actual calendar container --------
            popper: {
              // -------- custom styles for the calendar container --------
              sx: {
                // -------- calendar container --------
                ".MuiPickersPopper-paper": {
                  fontFamily: "Open Sans",
                  borderRadius: "20px",
                },
                // -------- calendar header, year and month on expand --------
                ".MuiPickersCalendarHeader-label, .MuiPickersYear-yearButton, .MuiPickersMonth-monthButton":
                  {
                    fontFamily: "Open Sans",
                    color: "#041822",
                  },
                // -------- calendar weekdays --------
                ".MuiDayCalendar-weekDayLabel": {
                  fontFamily: "Open Sans",
                  color: "#59676E",
                },
                // -------- calendar days --------
                ".MuiPickersDay-dayWithMargin": {
                  fontFamily: "Open Sans",
                  fontSize: "1rem",
                  color: "#041822",
                },
                // -------- calendar year and month buttons --------
                ".MuiSvgIcon-root": { color: "#041822" },
              },
            },
          }}
        />
      </LocalizationProvider>
    );
  }
);

CalendarComponent.displayName = "CalendarComponent";

export default CalendarComponent;
