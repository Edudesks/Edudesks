import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { TextFieldProps } from "@mui/material";
import '../styles/CalenderComponent.module.css'

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, onClick, onChange }) => {
    return (
      <input
        type="text"
        value={value}
        onClick={onClick} // Opens the DatePicker dialog
        onChange={onChange} // Allows for typing or any additional behavior
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          width: '100%',
        }}
        placeholder="Select a date"
      />
    );
  };

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

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={selectedDate}
        onChange={(newValue) => handleDateChange(newValue)}
        maxDate={today}
        views={["year", "month", "day"]}
        slots={{
            openPickerIcon: CalendarMonthOutlined,
        }}
        slotProps={{
            textField: {sx: {"& .MuiSvgIcon-root": {color: 'red'}}}, popper: {sx: {'.MuiDateCalendar-root': {fontFamily: 'Open-Sans', }, '.MuiPickersCalendarHeader-label': {fontSize: '2rem', color: 'red'}},}
        }}
        // slots={{
        //   openPickerIcon: CalendarMonthOutlined,
        // }}
        // slots={{ textField: CustomInput, openPickerIcon: CalendarMonthOutlined }}
        // slotProps={{ textField: { value: selectedDate ? selectedDate.toDateString(): '', onClick: () => {} } }}
      />
    </LocalizationProvider>
  );
};

export default CalendarComponent;
