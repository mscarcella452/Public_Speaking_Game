import React from "react";
import styled from "styled-components";
import { Box, Paper } from "@mui/material";
import {
  cardContainerSx,
  cardOverlaySx,
  flexBoxSx,
  frontFlipSx,
  backFlipSx,
  backgroundWordsImageSx,
  logoImageSx,
} from "../../SXstyles";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";
// import backgroundWords from "../../Images/backgroundWords.png";

function FlipContainer({ mainContainer, containerSx, flip, children }) {
  return (
    <Box sx={containerSx}>
      <Box
        sx={{
          ...flexBoxSx,
          position: "relative",
          transition: "width ease-in .5s",
          borderRadius: "20px",
          fontSize: "2rem",
          overflow: "hidden",
        }}
      >
        <FlipBoxInner
          sx={{ ...flipBoxInnerSx, transform: flip && "rotateX(180deg)" }}
        >
          <FrontFlip sx={frontFlipSx}>
            {mainContainer && <Box sx={logoImageSx} />}
          </FrontFlip>
          <BackFlip sx={backFlipSx}>{children}</BackFlip>
          <Paper elevation={1} sx={cardOverlaySx} />
        </FlipBoxInner>
      </Box>
    </Box>
  );
}

export default FlipContainer;

const FlipBoxInner = styled(Box)``;
const FrontFlip = styled(Box)``;
const BackFlip = styled(Box)``;

const flipBoxInnerSx = {
  width: "100%",
  height: "100%",
  transition: "transform 1.5s",
  transformStyle: "preserve-3d",
  cursor: "pointer",
  position: "relative",
  borderRadius: "20px",
  position: "relative",
  backgroundColor: "#fff",
  backgroundColor: "#981010",
};

const questionCardBackSx = {
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
  background: "white",
  borderRadius: "20px",
};
