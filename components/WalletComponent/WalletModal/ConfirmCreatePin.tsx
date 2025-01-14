import { Modal, Box} from "@mui/material";
import React, { useState, useRef} from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { FaRegCircle } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import SuccessfulCreatePinComponent from './SuccessFulCreatePin';
type ConfirmPinModalProps = {
  open: boolean;
  handleClose: () => void;
  pin: string;
};
export type VerificationCodeFormData = {
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
  };
  
const ConfirmPinModal: React.FC<ConfirmPinModalProps> = ({
  open,
  handleClose,
  pin,
}) => {
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
        return combinedOTP === pin;
      },
      {
        message: "Invalid OTP",
      }
    );

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const {
      control,
      handleSubmit,
      setValue,
      watch,
      formState: { errors,isValid, isSubmitted },
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
        const [isModalOpen,setIsModalOpen] = useState(false)

        const handleConfirm = () => {
    setIsModalOpen(true);
          };
          const allFieldsFilled = Object.values(watch()).every((val) => val);

  let buttonColor;
  if (!allFieldsFilled) {
    buttonColor = "bg-[var(--grey)]";
  } else if (allFieldsFilled && !isSubmitted) {
    buttonColor = "bg-[var(--primary)]";
  } else if (isSubmitted && Object.keys(errors).length > 0) {
    buttonColor = "bg-[var(--secondary)]";
  } else if (isSubmitted && Object.keys(errors).length === 0 && isValid) {
    buttonColor = "bg-[var(--primary)]";
  }
    
  return (
    <>
    <Modal open={open} aria-labelledby="Confirm PIN">
      <Box
        sx={{
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
        }}
        className="absolute top-[50%] left-[50%] w-[90%] sm:w-[415px] bg-[white] p-4 h-[360px] flex flex-col gap-2"
      >
        <div className="flex justify-end font-medium">
          <HiXMark onClick={handleClose} className='text-[35px] hover:cursor-pointer'/>
        </div>
        <h2 className="font-[600] text-[25px] sm:text-[32px] text-center">Confirm Pin</h2>
        <p className='font-normal text-[14px] tracking-[0.15px] text-[#808283] mt-0 text-center'>Enter 4-digit pin to secure your account</p>
                  <form onSubmit={handleSubmit(handleConfirm)} className="w-full sm:w-[350px]">
                    <div className="flex m-5 items-center justify-between gap-3 h-auto pb-4">
                      {[0, 1, 2, 3].map((index) => (
                        <Controller
                          key={index}
                          name={`otp${index + 1}` as keyof VerificationCodeFormData}
                          control={control}
                          render={({ field }) => (
                            <div className="flex items-center flex-col">
                              <input
                                {...field}
                                ref={(el) => {
                                  inputRefs.current[index] = el!;
                                }}
                                type="text"
                                maxLength={1}
                                 placeholder="-"
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-full h-[47px] text-center rounded-[5px] border text-[18px] placeholder:font-bold border-[var(--border)]"
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
                    <div className="w-full text-center">
                       <button
                                    className={`${buttonColor} px-2.5 py-[0.9375rem] rounded-[33px] w-[80%] text-lg font-bold leading-5 text-[var(--secondary-text-color)]`}
                                    type="submit"
                                  >
                                    Confirm Pin
                                  </button>
                    </div>
                  </form>
      </Box>
    </Modal>
    
    {isModalOpen && (
        <SuccessfulCreatePinComponent open={isModalOpen}  handleClose={() => setIsModalOpen(false)}/>
    )}
</>
  );
};

export default ConfirmPinModal;
