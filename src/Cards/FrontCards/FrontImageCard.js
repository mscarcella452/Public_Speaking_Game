import React from "react";
import { Paper, Box } from "@mui/material";
import { frontFlipSx } from "../../SXstyles";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";

function FrontImageCard({ image }) {
  return (
    <Paper elevation={5} sx={{ ...frontFlipSx, padding: ".75rem" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: `url(${image}) no-repeat center`,
          backgroundSize: "contain",
        }}
      />
    </Paper>
  );
}

export default FrontImageCard;
