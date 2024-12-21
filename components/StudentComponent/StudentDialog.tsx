import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import GeneralButton from "../GeneralButton";
import { ArrowRight02Icon, Cancel01Icon } from "hugeicons-react";

interface StudentDialogProps {
  open: boolean;
  selectedOption: string;
  onClose: () => void;
  onOptionChange: (option: string) => void;
  onContinue: () => void;
}

const StudentDialog: React.FC<StudentDialogProps> = ({
  open,
  selectedOption,
  onClose,
  onOptionChange,
  onContinue,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          margin: "0px",
          paddingX: "53px",
          paddingY: "11px",
          borderRadius: "15px",
          maxWidth: "663px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        },
      }}
    >
      <DialogTitle className="text-center mt-[4.0625rem] p-0 font-Open-Sans flex flex-col gap-2">
        <p className="font-bold text-2xl text-[var(--primary-text-color)]">
          How would you like to add students
        </p>
        <p className="text-base font-normal text-[var(--primary-text-color)]">
          Choose an option to either fill out the student admission form
          manually or upload a list of students using a CSV file.
        </p>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 43,
          top: 11,
          width: 40,
          height: 40,
          color: "#F65252",
        })}
      >
        <Cancel01Icon />
      </IconButton>
      <DialogContent className="p-0 mt-[1.8125rem] flex flex-col gap-7 items-center">
        <RadioGroup
          value={selectedOption}
          onChange={(e) => onOptionChange(e.target.value)}
          className="flex flex-col gap-3 w-full"
        >
          {/* -------- manual entry --------
          <FormControlLabel
            className="w-full m-0 p-4 flex gap-3 items-start border border-[var(--border)] rounded-lg bg-[var(--secondary-text-color)] peer-checked:bg-black"
            control={<Radio className="peer p-0" />}
            value={"manual"}
            label={
              <div className="font-Open-Sans">
                <p className="text-[var(--primary)]">
                  Fill Admission Form Manually
                </p>
                <p className="text-[var(--grey)]">
                  Enter student details one by one using our admission form
                </p>
              </div>
            }
          ></FormControlLabel> */}
          {/* -------- manual entry -------- */}
          <FormControlLabel
            sx={{
              width: "100%",
              margin: 0,
              padding: "16px",
              gap: "12px",
              alignItems: "flex-start",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "black"
                  : "var(--secondary-text-color)",
              "& .Mui-checked + div": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            control={
              <Radio
                className="p-0"
                sx={{
                  color: "#E2E9F6",
                  "&.Mui-checked": {
                    color: "#002F49F2", // Color when checked
                  },
                }}
              />
            }
            value={"manual"}
            label={
              <div className="font-Open-Sans">
                <p className="text-[var(--primary-text-color)]">
                  Fill Admission Form Manually
                </p>
                <p className="text-[var(--grey)]">
                  Enter student details one by one using our admission form
                </p>
              </div>
            }
          ></FormControlLabel>
          {/* -------- csv entry -------- */}
          <FormControlLabel
            sx={{
              width: "100%",
              margin: 0,
              padding: "16px",
              gap: "12px",
              alignItems: "flex-start",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "black"
                  : "var(--secondary-text-color)",
              "& .Mui-checked + div": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            control={
              <Radio
                className="p-0"
                sx={{
                  color: "#E2E9F6",
                  "&.Mui-checked": {
                    color: "#002F49F2", // Color when checked
                  },
                }}
              />
            }
            value={"csv"}
            label={
              <div className="font-Open-Sans">
                <p className="text-[var(--primary-text-color)]">
                  Upload from CSV
                </p>
                <p className="text-[var(--grey)]">
                  Upload a CSV file containing your student list for quick and
                  easy admission
                </p>
              </div>
            }
          ></FormControlLabel>
          {/* -------- csv entry --------
          <FormControlLabel
            control={<Radio />}
            value={"csv"}
            label={
              <div>
                <p>Upload from CSV</p>
                <p>
                  Upload a CSV file containing your student list for quick and
                  easy admission
                </p>
              </div>
            }
          ></FormControlLabel> */}
        </RadioGroup>
        <GeneralButton
          onClick={onContinue}
          buttonText={"Continue"}
          size={"large"}
          state={"active"}
          icon={<ArrowRight02Icon />}
          className="w-full mb-[15px]"
          iconPosition="right"
        />
      </DialogContent>
    </Dialog>
  );
};

export default StudentDialog;
