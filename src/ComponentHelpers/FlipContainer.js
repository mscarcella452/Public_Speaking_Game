import React, { useEffect } from "react";
import { useToggle } from "../Helpers/CustomHooks";
import { delay } from "../Helpers/FunctionHelpers";
import { Box, Paper } from "@mui/material";
import {
  frontFlipSx,
  flipBoxInnerSx,
  backFlipSx,
  fabricOverlaySx,
  logoImageSx,
} from "../SXstyles";

function FlipContainer({ main, containerSx, active, overlay, children }) {
  return (
    <Box
      sx={{
        ...containerSx,
        borderRadius: main ? "10px" : "5px",
        background: overlay ? "transparent" : "rgb(15, 15, 15)",
      }}
    >
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipBoxInnerSx,
          transform: active && "rotateX(180deg)",
          borderRadius: main ? "10px" : "5px",
          background: overlay && "transparent",
        }}
      >
        {/* FrontFlip */}

        <Box
          sx={{
            ...frontFlipSx,
            borderRadius: main ? "10px" : "5px",
          }}
        >
          {overlay && main ? <Box sx={logoImageSx} /> : null}
        </Box>

        {/* BackFlip */}
        <Box
          sx={{
            ...backFlipSx,
            borderRadius: main ? "10px" : "5px",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          {/* fabric overlay */}
          {overlay && (
            <Paper
              elevation={1}
              sx={{ ...fabricOverlaySx, opacity: main ? 0.2 : 0.5 }}
            />
          )}
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default FlipContainer;
