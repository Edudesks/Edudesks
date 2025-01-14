import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { Modal, Box} from "@mui/material";
import React, { useState, useRef} from "react";
import { HiXMark } from "react-icons/hi2";
type SuccessfulPinModalProps = {
    open: boolean;
    handleClose: () => void;
  };

const SuccessfulCreatePinComponent: React.FC<SuccessfulPinModalProps> = ({ open, handleClose }) => {
    return(
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
<div className="flex flex-col gap-4 items-center">
    <IoMdCheckmarkCircleOutline className="text-[100px] text-center text-[var(--success)]"/>
    <h2 className="font-[600] text-[18px] sm:text-[21px] text-center">
    Pin Successfully Created
    </h2>
    <p className='font-normal text-[13px] tracking-[0.15px] text-[#808283] mt-0 text-center'>
    Your pin was successfully created. Please secure your pin
    </p>
    <button
                                    className={`bg-[var(--primary)] px-2.5 py-[0.9375rem] rounded-[33px] w-[80%] text-lg font-bold leading-5 flex items-center justify-center gap-2 text-[var(--secondary-text-color)]`}
                                    type="submit"
                                  >Continue
                                  <GoArrowRight/>

                                  </button>
</div>

                    </Box>
                    </Modal>
        </>
    )
}
export default SuccessfulCreatePinComponent