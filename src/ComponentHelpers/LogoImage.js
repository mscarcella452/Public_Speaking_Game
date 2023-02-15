import React from "react";
import head from "../Images/head.png";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx } from "../Styles/SXstyles";

function LogoImage() {
  return (
    <Paper
      elevation={0}
      sx={{
        ...flexBoxSx,
        background: "transparent",
        // background: `url(${head}) no-repeat center`,
        // backgroundSize: "contain",
      }}
    >
      <Box
        sx={{
          ...flexBoxSx,
          fontFamily: Sx.font.display,
          fontSize: "10rem",
          color: "#fff",
          //   textDecoration: "underline",
          textAlign: "center",
          lineHeight: "1",
          textShadow:
            "-1px -3px 0 #981010, 1px -3px 0 #000, -1px 3px 0 #981010, 1px 5px 0 #000",
          //   textShadow: `2px 2px black`,
        }}
      >
        Public Speaking
      </Box>
    </Paper>
  );
}

export default LogoImage;
