import { Modal, Box } from '@mui/material';
import React, { useState, useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

// Define the type for the OTP form data
export type VerificationCodeFormData = {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
};

// Props for VerifyModalComponent
type VerifyModalProps = {
  handleCancel: () => void;
};

// The test OTP value for validation
const testOTP = "1111";

// Zod schema for validating the OTP form data
const verificationCodeSchema = z
  .object({
    otp1: z.string().length(1).regex(/^\d$/),
    otp2: z.string().length(1).regex(/^\d$/),
    otp3: z.string().length(1).regex(/^\d$/),
    otp4: z.string().length(1).regex(/^\d$/),
  })
  .refine(
    (data) => {
      const combinedOTP = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
      return combinedOTP === testOTP;
    },
    {
      message: "Invalid OTP",
    }
  );

const CreatePinComponent: React.FC<VerifyModalProps> = ({ handleCancel }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // UseForm hook with zodResolver for validation
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<VerificationCodeFormData>({
    mode: "onSubmit",
    defaultValues: { otp1: "", otp2: "", otp3: "", otp4: "" },
    resolver: zodResolver(verificationCodeSchema),
  });

  // Handle input change logic
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === "") {
      setValue(`otp${index + 1}` as keyof VerificationCodeFormData, value);
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace key logic
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0) {
      setValue(`otp${index + 1}` as keyof VerificationCodeFormData, "");
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle form submission
  const onSubmit = (data: VerificationCodeFormData) => {
    console.log("Submitted Data:", data);
  };

  const allFieldsFilled = Object.values(watch()).every((val) => val);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '27%',
            right: '0%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            bgcolor: 'var(--landing-page-background-color)',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 5,
          }}
        >
          <h2>Create Pin</h2>
          <p>Enter 4-digit pin to secure your account</p>
          <form onSubmit={handleSubmit(onSubmit)} className="otp-form">
            <div className="otp-inputs">
              {[0, 1, 2, 3].map((index) => (
                <Controller
                  key={index}
                  name={`otp${index + 1}` as keyof VerificationCodeFormData}
                  control={control}
                  render={({ field }) => (
                    <div className="otp-input-wrapper">
                      <input
                        {...field}
                        ref={(el) => {
                          inputRefs.current[index] = el!;
                        }}
                        type="text"
                        maxLength={1}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="otp-input"
                      />
                      {errors[`otp${index + 1}` as keyof VerificationCodeFormData] && (
                        <p className="error-message">
                          {errors[`otp${index + 1}` as keyof VerificationCodeFormData]?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              ))}
            </div>
            <div className="submit-button-wrapper">
              <button type="submit" className="submit-button">
                Create Pin
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CreatePinComponent;
