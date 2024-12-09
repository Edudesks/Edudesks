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
  const stepFields: Record<number, FormFieldKeys[]> = {
    0: [
      "personalInformation.lastName",
      "personalInformation.otherNames",
      "personalInformation.dateOfBirth",
      "personalInformation.age",
      "personalInformation.gender",
      "personalInformation.admissionDate",
      "personalInformation.classes",
    ],
    1: [
      "contactInformation.nationality",
      "contactInformation.stateOfOrigin",
      "contactInformation.localGovernment",
      "contactInformation.town",
      "contactInformation.homeAddress",
    ],
    2: [
      "parentInformation.motherLastName",
      "parentInformation.motherFirstName",
      "parentInformation.motherEmailAddress",
      "parentInformation.motherPhoneNumber",
      "parentInformation.motherHomeAddress",
      "parentInformation.fatherLastName",
      "parentInformation.fatherFirstName",
      "parentInformation.fatherEmailAddress",
      "parentInformation.fatherPhoneNumber",
      "parentInformation.fatherHomeAddress",
    ],
    3: [
      "healthInformation.currentMedication",
      "healthInformation.healthCondition",
      "healthInformation.genotype",
      "healthInformation.bloodGroup",
      "healthInformation.allergies",
      "healthInformation.disabilities",
    ],
    4: []
  }

  const [notification, setNotification] = useState({
    open: false,
    type: "error" as "error" | "success",
    message: "",
    details: "",
  });

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const { isSubmitted, isValid, errors } = methods.formState;
  const allFieldsFilled = isValid && Object.keys(errors).length === 0;

  console.log(`Errors`, methods.formState.errors)
  console.log(activeStep);



  const handleNext = async () => {
    const fieldsToValidate = stepFields[activeStep as keyof typeof stepFields];
    const isValid = await methods.trigger(fieldsToValidate as (keyof FormData)[]);
    if (!isValid) {
      console.log('is not valid')
      setNotification({
        open: true,
        type: "error",
        message: "Empty Required Fields",
        details: "All required fields must be filled out. Please check and try again.",
      });
      return;
    }

    setNotification({
      open: true,
      type: "success",
      message: "Student Added Successfully!",
      details:
        "You’ve successfully added the student’s details.",
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log('is Valid')
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };


  const handlePrevious = () => {
    setActiveStep((prevActiveStep) => {
      return Math.max(prevActiveStep - 1, 0);
    });
  };

  const onSubmit = (data: FormData) => {
    console.log("Final form data:", data);
  };
  return (
    <FormProvider {...methods}>
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
            <form action="" onSubmit={methods.handleSubmit(onSubmit)}>
              <FormStepComponent step={activeStep} methods={methods} />
            </form>
          </div>
          {/* -------- step previous and next buttons -------- */}
          <div className="w-full flex gap-5 justify-end lg:justify-between mt-12 lg:mt-[1.75rem]">
            {activeStep >= 0 && (
              <GeneralButton
                buttonText={"Previous"}
                size={"small"}
                state={'previous'}
                onClick={handlePrevious}
                icon={<ArrowLeft01Icon/>}
                iconPosition="left"
                className="w-[8.125rem]"
              />
            )}
            {activeStep < 4 && (
              <GeneralButton
                buttonText={"Next"}
                size={"small"}
                state={'active'}
                onClick={handleNext}
                icon={<ArrowRight01Icon/>}
                iconPosition="right"
                className="w-[8.125rem]"
              />
            )}
          </div>
        </div>
        {/* Notification */}
      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        details={notification.details}
        onClose={handleCloseNotification}
        onPrimaryAction={() => console.log("Continue clicked")}
        onSecondaryAction={() => console.log("View Profile clicked")}
      />
      </div>
    </FormProvider>
  );
};

export default Student;
