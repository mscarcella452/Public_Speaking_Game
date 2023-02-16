import React, { useContext } from "react";
import {
  Sx,
  flexBoxSx,
  fabricOverlaySx,
  backgroundWordsOverlaySx,
  HeaderSx,
  mainBoxSx,
  footerSx,
} from "../Styles/SXstyles";
import { Paper, Box } from "@mui/material";
import { timerContext } from "../Context/TimerContext";

export default function MainBackground({ children }) {
  const timer = useContext(timerContext);
  return (
    <Paper sx={{ ...backgroundPageSx }}>
      {/* <Box
        sx={{
          ...timerOverlaySx,
          opacity: timer.seconds / timer.startingValue,
          overflow: "scroll",
        }}
      /> */}

      {children}
    </Paper>
  );
}

const backgroundPageSx = {
  ...flexBoxSx,
  height: "100%",
  maxHeight: "900px",
  // minHeight: {
  //   xs: "300px",
  //   sm: "300px",
  //   md: "150px",
  //   lg: "250px",
  //   xl: "300px",
  // },
  // maxHeight: {
  //   xs: "750px",
  //   sm: "450px",
  //   md: "450px",
  //   lg: "400px",
  //   xl: "900px",
  // },
  background: "transparent",
  position: "relative",
  // background: Sx.color.primary,
  overflow: "scroll",
  padding: Sx.padding.main,
};

const timerOverlaySx = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100%",
  width: "100%",
  backgroundColor: Sx.color.primary,
};
