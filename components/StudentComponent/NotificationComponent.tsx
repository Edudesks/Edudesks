import React from "react";
import {
  Snackbar,
  Alert,
  Button,
  styled,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";

// Styled Alert Component
const CustomAlert = styled(Alert, {
  shouldForwardProp: (prop) => prop != "isError",
})<{ isError?: boolean }>(({ theme, isError }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 13px",
  borderRadius: "4px",
  width: "fit-content",
  maxWidth: isError ? "30.5rem" : "35.5rem",
  fontFamily: "Open Sans, sans-serif",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  "& .MuiAlert-icon": {
    borderColor: isError ? "#FBEAE9" : "#D5FEED",
    alignItems: "center",
    border: "1px solid",
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: isError ? "#FBEAE9" : "#D5FEED",
    alignSelf: isError ? "center" : "flex-start",
  },
  "& .MuiAlert-message": {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    padding: "0px",
    width: "fit-content",
  },
  "& .MuiAlert-action": {
    margin: "unset",
    alignSelf: "flex-start",
    padding: "unset",
    maxWidth: "2.3125rem",
    "& .MuiButton-root": {
      width: "100%",
      maxWidth: "2.3125rem",
      padding: "0px",
    },
  },
}));

// -------- Notification Component
interface NotificationProps {
  open: boolean;
  message: string;
  type: "error" | "success";
  details?: string;
  onClose: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  open,
  message,
  type,
  details,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
}) => {
  const theme = useTheme();
  const isError = type === "error";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const NotificationContent = (
    <CustomAlert
      isError={isError}
      severity={type}
      icon={
        isError ? (
          <Image
            src="/icons/error-circle.svg"
            alt="Error"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/icons/success-circle.svg"
            alt="Error"
            width={16}
            height={16}
          />
        )
      }
      sx={{
        borderLeft: `6px solid ${isError ? "#F65252" : "#08C074"}`, // Red for error, green for success
        color: isError ? "#F65252" : "#08C074",
        backgroundColor: "#FFFFFF",
      }}
      onClose={onClose}
      action={
        <Button
          size="small"
          sx={{ textTransform: "capitalize", color: "#041822" }}
          onClick={onClose}
        >
          <Close className="w-5 h-5" />
        </Button>
      }
    >
      <div className="flex flex-col items-start w-full gap-1">
        <p className="text-[var(--primary-text-color)] font-semibold">
          {message}
        </p>
        {details && (
          <span className="text-[var(--grey)] text-sm">{details}</span>
        )}
      </div>
      {!isError && (
        <div
          className={`self-end w-full items-end justify-end z-10 gap-2 mt-8 flex`}
        >
          <button
            className="border border-solid font-semibold text-sm flex items-center justify-center px-4 gap-2.5 rounded-[1.375rem] bg-[#002F49F2] text-white py-2 hover:bg-[#022335]"
            onClick={onPrimaryAction}
          >
            Continue
          </button>
          <button
            className="border border-solid border-[#D0D5DD] font-semibold text-sm flex items-center justify-center px-4 gap-2.5 rounded-[1.375rem] text-[#002F49F2] py-2 whitespace-nowrap"
            onClick={onSecondaryAction}
          >
            View Profile
          </button>
        </div>
      )}
    </CustomAlert>
  );

  return isError ? (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={onClose}
      autoHideDuration={3000}
    >
      {NotificationContent}
    </Snackbar>
  ) : (
    <Dialog
      open={open}
      // hideBackdrop={isMobile ? false : true}
      onClose={onClose}
      sx={{ "& .MuiDialogContent-root": { padding: "unset" } }}
    >
      <DialogContent>{NotificationContent}</DialogContent>
    </Dialog>
  );
};

export default Notification;
