import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { CalendarMonthOutlined } from "@mui/icons-material";

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
        // slots={{
        //   openPickerIcon: CalendarMonthOutlined,
        // }}
        slots={{ textField: CustomInput, openPickerIcon: CalendarMonthOutlined }}
        slotProps={{ textField: { value: selectedDate ? selectedDate.toDateString(): '', onClick: () => {} } }}
      />
    </LocalizationProvider>
  );
};

export default CalendarComponent;
