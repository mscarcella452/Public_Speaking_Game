import React from "react";
import { Box } from "@mui/system";
import { cardContainerSx, cardOverlaySx } from "../../SXstyles";

function BtnCardContainer({ width, children }) {
  return (
    <Box
      sx={{
        ...cardContainerSx,
        padding: {
          xs: ".5rem",
          sm: ".5rem",
          md: ".5rem",
          lg: ".5rem",
        },
        boxShadow: ".5px 1px 4px 1px #474747 inset;",
        width: width,
      }}
    >
      <Box
        sx={{
          ...cardOverlaySx,
          opacity: 0.7,
          top: ".5px",
          bottom: ".5px",
          left: ".5px",
          right: ".5px",
        }}
      />
      {children}
    </Box>
  );
}

export default BtnCardContainer;
