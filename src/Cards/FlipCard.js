import React, { useEffect } from "react";
import { Paper, Box, Slide } from "@mui/material";
import { flexBoxSx, cardOverlaySx } from "../SXstyles";
import styled from "styled-components";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";

function FlipCard({
  flip,
  active,
  slideDirection,
  extraSx,
  timeout,
  children,
}) {
  return (
    <Slide
      direction={slideDirection}
      in={active}
      timeout={timeout}
      mountOnEnter
      unmountOnExit
    >
      <Box
        sx={{
          ...flexBoxSx,
          position: "relative",
          transition: "width ease-in .5s",
          borderRadius: "5px",
          fontSize: "2rem",
          overflow: "hidden",
          background: "transparent",
          ...extraSx,
        }}
      >
        <FlipBoxInner
          sx={{
            width: "100%",
            height: "100%",
            transition: "transform 1.5s",
            transformStyle: "preserve-3d",
            cursor: "pointer",
            position: "relative",
            transform: flip && "rotateX(180deg)",
            borderRadius: "5px",
            position: "relative",
            backgroundColor: "#fff",
          }}
        >
          {children}
          <Paper elevation={1} sx={cardOverlaySx} />
        </FlipBoxInner>
      </Box>
    </Slide>
  );
}

export default FlipCard;

// styled Components--------------------------------------------
const FlipBoxInner = styled(Box)``;
