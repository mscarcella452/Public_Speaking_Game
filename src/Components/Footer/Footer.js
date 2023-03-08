import React from "react";
import { Box } from "@mui/material";
import { footerSx } from "../../Styles/SXstyles";
import { BtnFlipContainer } from "../Helpers/FlipContainer";

export default function Footer({ active }) {
  return (
    <Box sx={footerSx}>
      {/* left btn */}
      <BtnFlipContainer active={active.bottom.leftBtn} />
      {/* middle btn */}
      <BtnFlipContainer active={active.bottom.middleBtn} />
      {/* right btn */}
      <BtnFlipContainer active={active.bottom.rightBtn} />
    </Box>
  );
}
