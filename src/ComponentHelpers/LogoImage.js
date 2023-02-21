import React from "react";
import head from "../Images/head.png";
import { Paper, Box, useMediaQuery } from "@mui/material";
import { flexBoxSx, Sx, fabricOverlaySx } from "../Styles/SXstyles";

function LogoImage() {
  const smallScreen = useMediaQuery("(max-height: 450px)");
  return (
    <Paper
      elevation={0}
      sx={{
        ...flexBoxSx,
        background: "transparent",
        position: "relative",
        // background: `url(${head}) no-repeat center`,
        // backgroundSize: "contain",
      }}
    >
      <Box
        sx={{
          ...flexBoxSx,
          fontFamily: Sx.font.display,
          ...Sx.fontSize.logo,
          color: "#fff",
          textAlign: "center",
          lineHeight: "1",
          textShadow: `-1px -3px 0 ${Sx.color.primary}, 1px -3px 0 #000, -1px 3px 0 ${Sx.color.secondary}, 1px 5px 0 #000`,
        }}
      >
        Public Speaking
      </Box>
    </Paper>
  );
}

export default LogoImage;
