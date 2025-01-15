import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { Modal, Box } from "@mui/material";
import React, { useState, useRef } from "react";
import { HiXMark } from "react-icons/hi2";
import { openSans } from "@/app/fonts/fonts";
type SuccessfulPinModalProps = {
  open: boolean;
  handleClose: () => void;
};

const FinalVerifyComponent: React.FC<SuccessfulPinModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <>
      <Modal open={open} aria-labelledby="Confirm PIN">
        <Box
          sx={{
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
          }}
          className={`${openSans.className} absolute top-[50%] left-[50%] w-[90%] sm:w-[415px] bg-[white] p-4 h-auto sm:h-[360px] flex flex-col gap-2`}
        >
          <div className="flex justify-end font-medium">
            <HiXMark
              onClick={handleClose}
              className="text-[35px] hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <IoMdCheckmarkCircleOutline className="text-[100px] text-center text-[var(--success)]" />
            <h2 className="font-[600] text-[18px] sm:text-[21px] text-center">
            Verification Successful
            </h2>
            <p className="font-normal text-[13px] tracking-[0.15px] text-[#808283] mt-0 text-center">
            Your pin has been verified
            </p>
            <p className="text-[14px] sm:text-[16px] font-[600] text-[var(--secondary)] text-center">You can proceed to make payment</p>
            <button
              className={`bg-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] w-[80%] text-lg font-bold leading-5 flex items-center justify-center gap-2 text-[var(--secondary-text-color)]`}
              type="submit"
            >
              Proceed
              <GoArrowRight />
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default FinalVerifyComponent;
