import React from "react";
import { Paper, Box } from "@mui/material";
import { cardFrontSx } from "../../SXstyles";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";

function FrontImageCard({ image }) {
  return (
    <Paper elevation={5} sx={cardFrontSx}>
      <Box
        sx={{
          width: "95%",
          height: "95%",
          background: `url(${image}) no-repeat center`,
          backgroundSize: "contain",
        }}
      />
    </Paper>
  );
}

export default FrontImageCard;
