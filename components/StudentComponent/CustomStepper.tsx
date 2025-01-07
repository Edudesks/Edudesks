import { Stepper, Step, StepLabel } from "@mui/material";
import {
  UserIcon,
  CallIcon,
  UserMultipleIcon,
  News01Icon,
  UserAccountIcon,
} from "hugeicons-react";
import React, { useState } from "react";
import { CustomConnector, CustomStepIcon } from "./StepperIcon";
import { useTheme, useMediaQuery } from "@mui/material";

interface CustomStepperProps {
    steps: { icon: React.ElementType; label: string }[];
    activeStep: number;
    onNext: () => void
    onPrevious: () => {}
}

const CustomStepper: React.FC<CustomStepperProps> = ({steps, activeStep}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const visibleSteps = isMobile
  ? steps.slice(Math.max(activeStep - 1, 0), activeStep + 2)
  : steps;
//   const steps = [
//     { icon: UserIcon, label: "Personal Information" },
//     { icon: CallIcon, label: "Contact Information" },
//     { icon: UserMultipleIcon, label: "Parent Information" },
//     { icon: News01Icon, label: "Health Information" },
//     { icon: UserAccountIcon, label: "School Fees Details" },
//   ];

//   const [activeStep, setActiveStep] = useState(0);
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handlePrevious = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} connector={<CustomConnector />} alternativeLabel>
        {visibleSteps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              sx={{
                "& .MuiStepLabel-label": {
                  marginTop: "13px",
                  fontSize: "14px",
                  fontFamily: "open sans",
                  whiteSpace: isMobile ? 'wrap' : 'nowrap',
                },
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CustomStepper;
