import React from "react";
import { Box } from "@mui/material";
import { frontFlipSx, flipBoxInnerSx } from "../SXstyles";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";
// import backgroundWords from "../../Images/backgroundWords.png";

function FlipContainer({ main, containerSx, flip, position, children }) {
  return (
    <Box sx={{ ...containerSx, borderRadius: main ? "10px" : "5px" }}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipBoxInnerSx,
          transform: flip && "rotateX(180deg)",
          borderRadius: main ? "10px" : "5px",
        }}
      >
        {/* FrontFlip */}
        <Box
          sx={{
            ...frontFlipSx,
            borderRadius: main ? "10px" : "5px",
          }}
        ></Box>
        {/* BackFlip */}
        <Box
          sx={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default FlipContainer;
