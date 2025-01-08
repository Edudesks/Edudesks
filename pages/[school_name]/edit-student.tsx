
import StudentManualEntry from "@/components/StudentComponent/StudentManualEntry";
import StudentDialog from "@/components/StudentComponent/StudentDialog";
import FormStepComponent from "@/components/StudentComponent/FormStepComponent";
import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import {
  UserIcon,
  CallIcon,
  UserMultipleIcon,
  News01Icon,
  UserAccountIcon,
} from "hugeicons-react";
import { useMediaQuery, useTheme } from "@mui/material";
import CustomStepper from "@/components/StudentComponent/CustomStepper";
import GeneralButton from "@/components/GeneralButton";
import { ArrowRight01Icon, ArrowLeft01Icon } from "hugeicons-react";
import { z } from "zod";
import { personalInformationSchema, contactInformationSchema, parentInformationSchema, healthInformationSchema } from "@/features/auth/studentSchema";
import { FormProvider, set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Notification from "@/components/StudentComponent/NotificationComponent";
import { useAppDispatch } from "@/store/hooks";
import { setActivePage } from "@/store/slices/sidebarSlice";
import withProtectedRoute from "@/hoc/ProtectedRoute";

/**
 *
 * TODO: Add further functionalities to image component. User should be able to center image.
 * TODO: On click, user should also be able to edit image.
 */

const formSchema = z.object({
  personalInformation: personalInformationSchema,
  contactInformation: contactInformationSchema,
  parentInformation: parentInformationSchema,
  healthInformation: healthInformationSchema
});

export type FormData = z.infer<typeof formSchema>;
type FormFieldKeys = keyof FormData | `${keyof FormData}.${string}`;

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


  const onSubmit = (data: FormData) => {
    console.log("Final form data:", data);
  };
  const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(setActivePage({active:"student", parentNav: "student"})); 
      })
  return (
    <>
      <StudentManualEntry />
    </>
  );
};

export default Student
