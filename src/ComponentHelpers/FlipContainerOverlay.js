import React from "react";
import { Box, Paper } from "@mui/material";
import {
  fabricOverlaySx,
  frontFlipSx,
  backFlipSx,
  flipBoxInnerSx,
  logoImageSx,
} from "../SXstyles";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";
// import backgroundWords from "../../Images/backgroundWords.png";

function FlipContainerOverlay({ main, containerSx, flip, children }) {
  return (
    <Box
      sx={{
        ...containerSx,
        background: "transparent",
      }}
    >
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipBoxInnerSx,
          transform: flip && "rotateX(180deg)",
          background: "transparent",
        }}
      >
        {/* FrontFlip */}
        <Box sx={{ ...frontFlipSx, borderRadius: main ? "10px" : "5px" }}>
          {main && <Box sx={logoImageSx} />}
        </Box>
        {/* BackFlip */}
        <Box sx={{ ...backFlipSx, borderRadius: main ? "10px" : "5px" }}>
          {/* fabric overlay */}
          <Paper
            elevation={1}
            sx={{ ...fabricOverlaySx, opacity: main ? 0.2 : 0.5 }}
          />
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default FlipContainerOverlay;
