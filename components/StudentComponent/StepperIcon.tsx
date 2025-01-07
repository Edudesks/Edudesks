import React from "react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { border, styled } from "@mui/system";
import { StepIconProps } from "@mui/material/StepIcon";
import { BorderStyle, Check } from "@mui/icons-material";
import {
  UserIcon,
  CallIcon,
  UserMultipleIcon,
  News01Icon,
  UserAccountIcon,
} from "hugeicons-react";

/**
 * * #002F49 - primary blue
 * * #8C8C8C - grey
 * * #95A7B1 - inactive border grey
 * * #9DA0AA - inactive icon color
 *
 */

// -------- Icons for each step --------
const icons: { [key: string]: React.ReactElement } = {
  1: <UserIcon size={21} />,
  2: <CallIcon size={21} />,
  3: <UserMultipleIcon size={21} />,
  4: <News01Icon size={21} />,
  5: <UserAccountIcon size={21} />,
};

// -------- Custom Connector --------
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    borderColor: "#ccc",
    borderStyle: 'dashed',
    marginLeft: 2,
    marginRight: 2,
  },
  [`&.Mui-active .MuiStepConnector-line`]: {
    borderColor: "#002F49",
    borderWidth: 2,
    borderStyle: 'solid'
  },
  [`&.Mui-completed .MuiStepConnector-line`]: {
    borderColor: "#002F49",
    borderStyle: 'solid',
    borderWidth: 2,
  },
}));

// -------- Custom Step Icon Component --------
function CustomStepIcon(props: StepIconProps) {
  const { active, completed, icon } = props;

  // -------- Styles for the icon container --------
  const StepIconRoot = styled("div")<{
    ownerState: { active?: boolean; completed?: boolean };
  }>(({ ownerState }) => ({
    backgroundColor: ownerState.completed
      ? "transaprent"
      : ownerState.active
      ? "#002F49"
      : "transparent",
    borderColor: ownerState.completed
      ? "#002F49"
      : ownerState.active
      ? "none"
      : "#95A7B1",
    color: ownerState.completed
      ? "#002F49"
      : ownerState.active
      ? "#FFFFFF"
      : "#9DA0AA",
    borderWidth: ownerState.completed ? 2 : ownerState.active ? 0 : 2,
    padding: 11,
    width: 41,
    height: 41,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"
  }));

  return (
    <StepIconRoot ownerState={{ active, completed }}>
      {completed ? (
        <Check style={{ fontSize: 20 }} />
      ) : (
        icons[String(icon)]
      )}
    </StepIconRoot>
  );
}

export { CustomStepIcon, CustomConnector };
