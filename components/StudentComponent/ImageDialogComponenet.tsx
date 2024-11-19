import React, { useReducer, useRef, useState } from "react";
import { PersonOutline, AddCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../../app/globals.css";
import { CloudUploadIcon } from "hugeicons-react";
import { useDropzone } from "react-dropzone";

/**
 * 
 * TODO: Add change image and trash icon
 */

const ImageDialogComponenet = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      handleClose();
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleImageUpload(acceptedFiles[0]);
    }
  };

  const { getInputProps, getRootProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
    multiple: false,
  });

  return (
    <div>
      <Button className="flex flex-col gap-1.5" onClick={handleClickOpen}>
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="w-[62px] h-[62px] rounded-full object-cover"
          />
        ) : (
          <>
            <div className="flex items-center justify-center relative w-[62px] h-[62px] bg-[var(--secondary-text-color)] rounded-full stroke-[0.365px] border border-[var(--border)] p-[1.094rem]">
              <PersonOutline className="text-black w-[32px] h-[32px]" />
              <AddCircle className="text-[#2196F3] absolute bottom-0.5 -right-1" />
            </div>
            <Typography
              className="text-[var(--primary-text-color)] text-xs font-bold"
              sx={{ textTransform: "none"!, fontFamily: "Open Sans" }}
            >
              Add Image
            </Typography>
          </>
        )}
      </Button>

      {/* -------- popup dialog -------- */}
      <Dialog
        open={open}
        onClose={handleClose}
        hideBackdrop={isMobile ? false : true}
        aria-labelledby="add-student-image"
        className={`${isMobile ? "" : "w-[25rem]"} h-[40rem]`}
      >
        {/* -------- dialog content -------- */}
        <DialogContent
          {...getRootProps()}
          className="py-7 px-6 border-2 border-dashed border-[var(--border)] bg-[var(--secondary-text-color)] cursor-pointer"
        >
          <input {...getInputProps()} hidden />
          {/* -------- box container -------- */}
          <Box className="flex flex-col gap-4 items-center justify-center">
            {!image ? (
              <>
                {" "}
                <Box className="w-14 h-14 rounded-full bg-[var(--border)] flex items-center justify-center p-3.5">
                  <CloudUploadIcon className="w-7 h-7 text-[var(--primary-text-color)]" />
                </Box>
                <Box className="flex flex-col items-center justify-center text-[var(--grey)]">
                  <Typography className="font-['Open_Sans']">
                    <Typography className="inline font-['Open_Sans'] text-[var(--primary)] font-semibold">
                      Click to upload{" "}
                    </Typography>
                    or drag and drop
                  </Typography>
                  <Typography className="font-['Open_Sans'] text-sm">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </Typography>
                </Box>
                <Typography className="text-[var(--grey)] text-sm font-semibold font-['Open_Sans']">
                  OR
                </Typography>
                {/* ------- button to upload image -------- */}
                <Button
                  className="normal-case font-['Open_Sans'] py-2 px-4 bg-[var(--primary)] text-[var(--secondary-text-color)] text-sm font-semibold rounded-md"
                  onClick={handleButtonClick}
                >
                  Browse Files
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    ref={fileInputRef}
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleImageUpload(e.target.files[0]);
                      }
                    }}
                  />
                </Button>
              </>
            ) : (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-auto max-h-60 object-cover rounded-md"
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageDialogComponenet;
