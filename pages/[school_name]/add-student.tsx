
import StudentManualEntry from "@/components/StudentComponent/StudentManualEntry";
import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import { z } from "zod";
import { personalInformationSchema, contactInformationSchema, parentInformationSchema, healthInformationSchema, studentSchema, studentFormData } from "@/features/auth/studentSchema";
import { useAppDispatch } from "@/store/hooks";
import { setActivePage } from "@/store/slices/sidebarSlice";
import withProtectedRoute from "@/hoc/ProtectedRoute";

/**
 *
 * TODO: Add further functionalities to image component. User should be able to center image.
 * TODO: On click, user should also be able to edit image.
 */

// const formSchema = z.object({
//   personalInformation: personalInformationSchema,
//   contactInformation: contactInformationSchema,
//   parentInformation: parentInformationSchema,
//   healthInformation: healthInformationSchema,
//   studentSchema: studentSchema
// });

// export type FormData = z.infer<typeof studentSchema>;
// type FormFieldKeys = keyof FormData | `${keyof FormData}.${string}`;

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


  const onSubmit = (data: studentFormData) => {
    console.log("Final form data:", data);
  };
  const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(setActivePage({active:"student", parentNav: "student"}));
      })
  return (
    <>
      {/* <StudentDialog
        open={open}
        selectedOption={selectedOption}
        onClose={handleClose}
        onOptionChange={handleOptionChange}
        onContinue={handleContinue}
      />

      {selectedOption === "manual" && <StudentManualEntry />} */}
      <StudentManualEntry />
    </>
  );
};

export default Student