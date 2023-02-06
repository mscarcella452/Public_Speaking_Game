import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { marginSx } from "../../SXstyles";
import BtnCardContainer from "./BtnCardContainer";

export default function Header({}) {
  return (
    <Box sx={HeaderSx}>
      <BtnCardContainer width={smallBtnWidthSx}></BtnCardContainer>
      <BtnCardContainer width={smallBtnWidthSx}></BtnCardContainer>
    </Box>
  );
}

const HeaderSx = {
  ...marginSx,
  height: {
    xs: "50px",
    sm: "50px",
    md: "50px",
    lg: "50px",
    xl: "50px",
  },
};

const smallBtnWidthSx = {
  xs: "55px",
  sm: "55px",
  md: "55px",
  lg: "55px",
  xl: "55px",
};
