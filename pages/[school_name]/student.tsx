import FormStepComponent from "@/components/StudentComponent/FormStepComponent";
import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
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
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

/**
 *
 * TODO: Add further functionalities to image component. User should be able to center image.
 * TODO: On click, user should also be able to edit image.
 */

const Student = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { icon: UserIcon, label: "Personal Information" },
    { icon: CallIcon, label: "Contact Information" },
    { icon: UserMultipleIcon, label: "Parent Information" },
    { icon: News01Icon, label: "Health Information" },
    { icon: UserAccountIcon, label: "School Fees Details" },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="w-full flex flex-col items-center lg:pl-[6.4375rem] lg:pr-[5.8125rem] lg:pt-[2.8125rem]">
      {/* -------- main students content -------- */}
      <div className="w-full flex flex-col items-center pt-9 px-[1.125rem] lg:p-[1.875rem]">
        {/* -------- heading and stepper -------- */}
        <div className="flex flex-col items-center gap-10 w-full">
          {/* -------- heading text -------- */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[var(--secondary)] font-bold text-xl lg:text-4xl leading-10">
              Online Admission Form
            </h1>
            <p className="text-[var(--primary-text-color)] text-sm lg:text-lg">
              Fill all the required fields to go to the next step
            </p>
          </div>
          {/* -------- stepper -------- */}
          <div className="w-full">
            <CustomStepper
              steps={steps}
              activeStep={activeStep}
              onNext={function (): void {
                throw new Error("Function not implemented.");
              }}
              onPrevious={function (): {} {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
        {/* -------- change method -------- */}
        <button className="mt-[3.75rem] lg:mt-10 self-start lg:self-end text-[var(--primary)] text-sm lg:text-xl underline">
          Change Method
        </button>
        {/* -------- form step component -------- */}
        <div className="w-full mt-6 lg:mt-[0.8125rem]">
          <FormStepComponent step={activeStep} />
        </div>
        {/* -------- step previous and next buttons -------- */}
        <div className="w-full flex lg:justify-between mt-12 lg:mt-[1.75rem]">
          <GeneralButton
            buttonText={"Previous"}
            size={"small"}
            state={"previous"}
            icon={ArrowLeft}
            className="w-[8.125rem]"
            onClick={handlePrevious}
          />
          <GeneralButton
            buttonText={"Next"}
            size={"small"}
            state={"active"}
            icon={ArrowRight}
            iconPosition="right"
            className="w-[8.125rem]"
            onClick={handleNext}

          />
        </div>
      </div>
    </div>
  );
};

export default Student;
