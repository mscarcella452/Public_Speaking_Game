import React from "react";
import { fabricOverlaySx, Sx, flexBoxSx } from "../Styles/SXstyles";
import { Button, Paper } from "@mui/material";

export function TopBtnFabric({ onClick, children }) {
  return (
    <Button onClick={onClick} sx={topBtnSx}>
      <Paper sx={fabricContainerSx}>
        <Paper sx={{ ...fabricOverlaySx, opacity: 1 }} />
        {children}
      </Paper>
    </Button>
  );
}
export function BottomBtnFabric({ onClick, children }) {
  return (
    <Button onClick={onClick} sx={bottomBtnSx}>
      <Paper sx={fabricContainerSx}>
        <Paper sx={{ ...fabricOverlaySx, opacity: 1 }} />
        {children}
      </Paper>
    </Button>
  );
}

const fabricContainerSx = {
  ...flexBoxSx,
  position: "relative",
  backgroundColor: "transparent",
  color: "#fff",
};

const btnSx = {
  ...flexBoxSx,
  zIndex: 20,
  padding: 0,
};

const topBtnSx = {
  ...btnSx,
  backgroundColor: Sx.color.primary,
  "&:hover": {
    backgroundColor: Sx.color.primary,
    opacity: 0.99,
  },
  fontSize: {
    galaxyFold: "20px",
    mobile: "20px",
    xs: "20px",
    sm: "25px",
    md: "25px",
    lg: "25px",
    xl: "20px",
  },
};
const bottomBtnSx = {
  ...btnSx,
  backgroundColor: Sx.color.secondary,
  "&:hover": {
    backgroundColor: Sx.color.secondary,
    opacity: 0.99,
  },
  fontFamily: Sx.font.display,
  fontSize: {
    galaxyFold: "25px",
    mobile: "25px",
    xs: "25px",
    sm: "30px",
    md: "35px",
    lg: "35px",
    xl: "35px",
  },
};
