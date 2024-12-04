import React from "react";
import { Snackbar, Alert, Button, styled } from "@mui/material";
import { Close } from "@mui/icons-material";
import { CheckmarkCircle02Icon } from "hugeicons-react";

// Styled Alert Component
const CustomAlert = styled(Alert)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  padding: "1rem",
  borderRadius: "4px",
  fontFamily: "Open Sans, sans-serif",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  "& .MuiAlert-icon": {
    alignItems: "center",
    // fontSize: "1.5rem",
    // marginRight: "0.75rem",
  },
  "& .MuiAlert-message": {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  "& .MuiAlert-action": {
    marginTop: "0.25rem",
  },
}));

// Notification Component
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
  const isError = type === "error";

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={onClose}
    >
      <CustomAlert
        severity={type}
        icon={<CheckmarkCircle02Icon size={16} />}
        sx={{
          borderLeft: `6px solid ${isError ? "#F65252" : "#08C074"}`, // Red for error, green for success
          color: isError ? "#F65252" : "#08C074",
          backgroundColor: "#FFFFFF",
        }}
        onClose={onClose}
        action={
          isError ? (
            <Button
            //   color="inherit"
              size="small"
              sx={{ textTransform: "capitalize", color: '#041822' }}
              onClick={onClose}
            >
              <Close className="w-5 h-5" />
            </Button>
          ) : (
            <>
              <Button
                onClick={onPrimaryAction}
                sx={{
                  textTransform: "capitalize",
                  color: "#022335",
                  backgroundColor: "#E8F2FF",
                  marginRight: "0.5rem",
                  "&:hover": { backgroundColor: "#D9EBFF" },
                }}
              >
                Continue
              </Button>
              <Button
                onClick={onSecondaryAction}
                sx={{
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  backgroundColor: "#002F49",
                  "&:hover": { backgroundColor: "#011F36" },
                }}
              >
                View Profile
              </Button>
            </>
          )
        }
      >
        <p className="text-[var(--primary-text-color)] font-semibold">
          {message}
        </p>
        {details && (
          <span className="text-[var(--grey)] text-sm">{details}</span>
        )}
      </CustomAlert>
    </Snackbar>
  );
};

export default Notification;
