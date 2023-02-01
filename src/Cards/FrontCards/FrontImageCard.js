import React from "react";
import { Box } from "@mui/material";
import { cardFrontSx } from "../../SXstyles";
// import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";

function FrontImageCard({ image }) {
  return (
    <Box sx={cardFrontSx}>
      <Box
        sx={{
          width: "95%",
          height: "95%",
          background: `url(${image}) no-repeat center`,
          backgroundSize: "contain",
        }}
      />
    </Box>
  );
}

export default FrontImageCard;
