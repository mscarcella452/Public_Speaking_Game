import React from "react";
import { backgroundPageSx, marginSx, cardOverlaySx } from "../../SXstyles";
import styled from "styled-components";
import { Paper, Box } from "@mui/material";
import backgroundWords from "../../Images/backgroundWords.png";

export default function MainBackground({ timerValue, seconds, children }) {
  // console.log(seconds / timerValue / 0.8);
  return (
    <Paper sx={{ ...backgroundPageSx, gap: ".5rem" }}>
      <TimerOverlay
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          background: "#fff",
          background: "#981010",
          //   background: gameActive && "#981010",
          opacity: seconds / timerValue,
          zIndex: 0,
        }}
      />
      <Box sx={{ ...cardOverlaySx, opacity: 0.2 }} />
      <BackgroundWordsOverlay
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
          background: `url(${backgroundWords}) no-repeat center`,
          backgroundSize: "cover",
          // opacity: seconds / timerValue,
        }}
      />

      <Header sx={marginSx} />
      {children}
    </Paper>
  );
}
const TimerOverlay = styled(Box)``;
const BackgroundWordsOverlay = styled(Box)``;
const Header = styled(Box)``;
const Footer = styled(Box)``;
