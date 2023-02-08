import React, { useEffect } from "react";
import { useToggle } from "../Helpers/CustomHooks";
import { delay } from "../Helpers/FunctionHelpers";
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

function FlipContainerOverlay({ main, containerSx, active, children }) {
  const [flip, toggleFlip] = useToggle(false);

  // useEffect(() => {
  //   !flip && delay(toggleFlip, 1000);
  //   flip && toggleFlip();
  // }, [active]);

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
          transform: active && "rotateX(180deg)",
          background: "transparent",
        }}
      >
        {/* FrontFlip */}
        {/* <Box sx={{ ...frontFlipSx, borderRadius: main ? "10px" : "5px" }}>
          {main && <Box sx={logoImageSx} />}
        </Box> */}
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
