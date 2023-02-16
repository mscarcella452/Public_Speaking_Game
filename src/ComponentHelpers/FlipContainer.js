import React from "react";
import { Box, Paper } from "@mui/material";
import { flipContainerSx } from "../Styles/FlipContainerStyles";
import { logoImageSx } from "../Styles/SXstyles";
import LogoImage from "./LogoImage";

// container background: overlay ? "transparent" : "rgb(15, 15, 15)"
// inner   background: overlay && "transparent",
// {overlay && main ? <Box sx={logoImageSx} /> : null}
//  {overlay && <Paper elevation={1} sx={flipContainerSx.fabric.main} />}
export function MainFlipContainer({ active, children }) {
  return (
    <Box sx={flipContainerSx.container.main}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner.default.main,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box sx={{ ...flipContainerSx.front.main, zIndex: 10 }} />
        {/* BackFlip */}
        <Box sx={flipContainerSx.back.main}>{children}</Box>
      </Box>
    </Box>
  );
}
export function MainFlipContainerOverlay({ active, children }) {
  return (
    <Box sx={{ ...flipContainerSx.container.main, background: "transparent" }}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner.overlay.main,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box sx={flipContainerSx.front.main}>
          {/* <Box sx={logoImageSx} /> */}
          <LogoImage />
          <Paper elevation={1} sx={flipContainerSx.fabric.main} />
        </Box>

        {/* BackFlip */}
        <Box sx={flipContainerSx.back.main}>
          {/* fabric overlay */}
          <Paper elevation={1} sx={flipContainerSx.fabric.main} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}
export function BtnFlipContainer({ active, children }) {
  return (
    <Box sx={flipContainerSx.container.btn}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner.default.btn,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box sx={flipContainerSx.front.btn} />
        {/* BackFlip */}
        <Box sx={flipContainerSx.back.btn}>{children}</Box>
      </Box>
    </Box>
  );
}
export function BtnFlipContainerOverlay({ active, children }) {
  return (
    <Box sx={{ ...flipContainerSx.container.btn, background: "transparent" }}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner.overlay.btn,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box sx={flipContainerSx.front.btn} />
        {/* BackFlip */}
        <Box sx={flipContainerSx.back.btn}>
          {/* fabric overlay */}
          <Paper elevation={1} sx={flipContainerSx.fabric.btn} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}

// small btn-----------------------

export function SmallBtnFlipContainer({ active, children }) {
  return (
    <Box sx={flipContainerSx.container.smBtn}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner.default.smBtn,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box sx={flipContainerSx.front.smBtn} />
        {/* BackFlip */}
        <Box sx={flipContainerSx.back.smBtn}>{children}</Box>
      </Box>
    </Box>
  );
}
export function SmallBtnFlipContainerOverlay({ active, children }) {
  return (
    <Box sx={{ ...flipContainerSx.container.smBtn, background: "transparent" }}>
      {/* FlipBox Inner */}
      <Box
        sx={{
          ...flipContainerSx.inner.overlay.smBtn,
          transform: active && "rotateX(180deg)",
        }}
      >
        {/* FrontFlip */}
        <Box sx={flipContainerSx.front.smBtn} />
        {/* BackFlip */}
        <Box sx={flipContainerSx.back.smBtn}>
          {/* fabric overlay */}
          <Paper elevation={1} sx={flipContainerSx.fabric.smBtn} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}
