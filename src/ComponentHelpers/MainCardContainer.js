import React from "react";
import { Box } from "@mui/system";
import { cardContainerSx, cardOverlaySx, flexBoxSx } from "../../SXstyles";
import PublicSpeakingCropped from "../../Images/PublicSpeakingCropped.png";

function MainCardContainer({ children }) {
  return (
    <Box
      sx={{
        ...cardContainerSx,
        height: {
          xs: "150px",
          sm: "175px",
          md: "225px",
          lg: "275px",
          xl: "400px",
        },
        width: {
          xs: "300px",
          sm: "350px",
          md: "450px",
          lg: "550px",
          xl: "800px",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          bottom: "1rem",
          left: "1rem",
          right: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".75rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `url(${PublicSpeakingCropped}) no-repeat center`,
            backgroundSize: "contain",
          }}
        />
      </Box>
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
