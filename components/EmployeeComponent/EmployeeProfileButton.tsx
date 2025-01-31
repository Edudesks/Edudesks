import { TiPencil } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import React, { useState } from "react";
import { Modal, Box, Button, Typography } from '@mui/material';
import { GoCheckCircleFill } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/router"
const EmployeeProfileButtonComponent: React.FC = () =>{
    const router = useRouter();
    const { school_name } = router.query; 
    const [open, setOpen] = useState(false);
    const [isEditingPersonalDetails, setIsEditingPersonalDetails] = useState(false);
    // const [personalDetails, setPersonalDetails] = useState({
    //     firstName: "Joseph",
    //     middleName: "Olawole",
    //     lastName: "Ernest",
    //     gender: "Male",
    //     dob: "7th June 2000",
    //     email: "josephernest109@gmail.com",
    //     nationalId: "10101010101001",
    //     bankAccount: "10101010101001 (Gt Bank)",
    //     department: "Teaching",
    //     role: "SSS1A English Teacher",
    //     phoneNumber: "08187643222",
    //     residentialAddress: "5, Joseph street, Yaba, Akoka, Lagos state",
    //     education: "B.SC in English",
    //     institution: "University of Lagos",
    //     CVpdf: "/documents/CV.pdf",
    //     universityTranscriptPdf: "/documents/UniversityTranscript.pdf",
    // });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEditClick = () => router.push(`/${school_name}/edit-employee`);
    const handleSaveClick = () => setIsEditingPersonalDetails(false);
    const handleCancelClick = () => setIsEditingPersonalDetails(false);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setPersonalDetails((prevDetails) => ({
    //         ...prevDetails,
    //         [name]: value,
    //     }));
    // };

    // const handleClearPersonalDetails = () => {
    //     setPersonalDetails({
    //         firstName: "",
    //         middleName: "",
    //         lastName: "",
    //         gender: "",
    //         dob: "",
    //         email: "",
    //         nationalId: "",
    //         bankAccount: "",
    //         department: "",
    //         role: "",
    //         phoneNumber: "",
    //         residentialAddress: "",
    //         education: "",
    //         institution: "",
    //         CVpdf: "",
    //         universityTranscriptPdf: "",
    //     });
    // };

    const handleDeleteProfile = () => {
        console.log("Profile Deleted");
        handleClose();
    };

    return (
        <>
            <div className="flex flex-col gap-3">
                <button onClick={handleEditClick} className="flex items-center bg-[var(--primary)] h-[44px] justify-center gap-1 rounded-[19.7px] text-[white] text-[15px]">
                    <TiPencil className="text-[20px]"/> Edit Profile
                </button>
                <button onClick={handleOpen} className="flex items-center border border-[var(--danger)] h-[44px] bg-[white] justify-center gap-1 rounded-[19.7px] text-[var(--danger)] text-[15px]">
                    <RiDeleteBin5Line className="text-[20px]"/> Delete Profile
                </button>
                {isEditingPersonalDetails && (
                    <div>
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                )}
            </div>
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
            borderLeft: '5px solid var(--danger)',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
            p: 4,
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            borderRadius: 5,
        }}
    >
        
        <div className="flex items-start justify-between w-full">
        <div className="flex items-start gap-3">
        <button className="text-[18px] self-start p-2 flex items-center justify-center bg-[#fda6a6] text-[var(--redColor2)] rounded-[12px] border border[var(--redColor2)]  "><GoCheckCircleFill /></button>
        <div className="flex flex-col gap-[.5px]">
            <Typography id="modal-title" variant="h6" className="text-[16px] font-[600]">
                Are you sure you want to delete the profile?
            </Typography>
            <Typography id="modal-description" className="text-[14px] text-[var(--grey)]">
                Once deleted, all your data, settings, and saved information will be permanently removed, and this action cannot be undone.
            </Typography>

            <div className="flex items-center justify-end gap-2 mt-3">
                <button
                    onClick={handleDeleteProfile}
                    className="text-[white] bg-[var(--danger)] border-none rounded-[14px] hover:cursor-pointer px-[2rem] py-[.5rem]"
                >
                    Delete
                </button>
                <button
                    onClick={handleClose}
                    className="text-[var(--primary)] border-[var(--primary)] border rounded-[14px] hover:cursor-pointer px-[2rem] py-[.5rem]"
                >
                    Cancel
                </button>
            </div>
        </div>
        </div>

            <button onClick={handleClose} className="text-[18px] flex items-center justify-center bg-transparent rounded-[12px] hover:cursor-pointer">
            <FaXmark />
        </button>
        </div>

       
    </Box>
</Modal>


        </>
    );
}
export default EmployeeProfileButtonComponent