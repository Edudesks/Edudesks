import { useState } from "react";
import StudentManualEntry from "@/components/StudentComponent/StudentManualEntry";
import StudentDialog from "@/components/StudentComponent/StudentDialog";

const Student = () => {
  const [open, setOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("manual");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    setOpen(false);
  };

  return (
    <>
      <StudentDialog
        open={open}
        selectedOption={selectedOption}
        onClose={handleClose}
        onOptionChange={handleOptionChange}
        onContinue={handleContinue}
      />

      {selectedOption === "manual" && <StudentManualEntry />}
    </>
  );
};

export default Student;
