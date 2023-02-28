import React, { useContext } from "react";
import { Sx, flexBoxSx } from "../../Styles/SXstyles";
import { FabricOverlay } from "./Overlays";
import { Box, Button, Paper } from "@mui/material";
import { gameContext } from "../../Context/GameStatusContext";

export function TopBtnFabric({ onClick, children }) {
  return (
    <Button onClick={onClick} sx={topBtnSx}>
      <Paper sx={fabricContainerSx}>
        <FabricOverlay backgroundSize={"10px"} />
        {children}
      </Paper>
    </Button>
  );
}
export function BottomBtnFabric({ onClick, children }) {
  return (
    <Button onClick={onClick} sx={bottomBtnSx}>
      <Paper sx={fabricContainerSx}>
        <FabricOverlay backgroundSize={{ galaxyFold: "10px", lg: "50%" }} />
        {children}
      </Paper>
    </Button>
  );
}
export function BottomResultFabric() {
  const game = useContext(gameContext);
  return (
    <Box
      sx={{
        ...bottomBtnSx,
        backgroundColor: game.failSpeech ? "#9d6745" : Sx.color.success,
      }}
    >
      <Paper sx={fabricContainerSx}>
        {/* <Paper sx={resultFabricOverlaySx} /> */}
        <Box
          sx={{
            opacity: 0.75,
            fontFamily: Sx.font.display,
          }}
        >
          {game.failSpeech ? "FAILED" : "100%"}
        </Box>
        <Box
          sx={{
            height: 1,
            width: 1,
            position: "absolute",
            top: 0,
            bototm: 0,
            right: 0,
            left: 0,
            opacity: 0.2,
            background: "black",
          }}
        />
      </Paper>
    </Box>
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
