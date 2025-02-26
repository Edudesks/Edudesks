import React from "react";
import {
  Snackbar,
  Alert,
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { CheckmarkCircle04Icon } from "hugeicons-react";

interface OTPNotificationProps {
  open: boolean;
  onClose: () => void;
}

const CustomAlert = styled(Alert, {
  shouldForwardProp: (prop) => prop != "isError",
})<{ isError?: boolean }>(({ theme, isError }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%!important",
  fontFamily: "Open Sans, sans-serif",
  "& .MuiAlert-icon": {
    alignItems: "center",
    padding: "unset",
  },
  "& .MuiAlert-message": {
    display: "flex",
    flexDirection: "column",
    padding: "0px",
  },
  "& .MuiAlert-action": {
    display: "none",
  },
}));

const OTPNotification: React.FC<OTPNotificationProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const NotificationContent = (
    <CustomAlert
      severity="success"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "18px",
        width: "fit-content",
        maxWidth: "35.5rem",
        fontFamily: "Open Sans, sans-serif",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(0, 47, 73, 0.95)",
        color: "#041822",
      }}
      icon={<CheckmarkCircle04Icon color="#ffffff" />}
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
        <p className="text-xl text-[var(--secondary-text-color)] font-bold">
          OTP Verification is successful
        </p>
      </div>
    </CustomAlert>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          padding: "unset",
          borderRadius: "18px",
          backgroundColor: "rgba(0, 47, 73, 0.95)",
        },
        "& .MuiDialogContent-root": {
          width: "23.125rem",
          padding: "14px 18px 13px 20px",
        },
      }}
    >
      <DialogContent>{NotificationContent}</DialogContent>
    </Dialog>
  );
};

export default OTPNotification;
