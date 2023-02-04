import React from "react";
import { Box } from "@mui/system";
import { questionCardBoxSx, cardOverlaySx } from "../../SXstyles";
import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";

function MainCardContainer({ children }) {
  return (
    <Box sx={questionCardBoxSx}>
      <Box
        sx={{
          width: "95%",
          height: "95%",
          background: `url(${PublicSpeakingCropped}) no-repeat center`,
          backgroundSize: "contain",
          position: "absolute",
        }}
      />
      <Box
        sx={{
          ...cardOverlaySx,
          top: "2px",
          bottom: "2px",
          left: "2px",
          right: "2px",
        }}
      />
      {children}
    </Box>
  );
}

export default MainCardContainer;
