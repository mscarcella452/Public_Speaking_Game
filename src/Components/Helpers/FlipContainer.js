import { memo } from "react";
import { Box, Paper } from "@mui/material";
import { flipContainerSx } from "../../Styles/FlipContainerStyles";
// import { Sx } from "../../Styles/SXstyles";
import Logo from "./Logo";

export const MainFlipContainer = memo(({ active }) => {
  return (
    <Box sx={{ ...flipContainerSx.container.main, background: "#000" }}>
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
        <Box sx={flipContainerSx.back.main} />
      </Box>
    </Box>
  );
});
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
          <Logo />
          <Paper elevation={1} sx={flipContainerSx.fabric.main} />
        </Box>

        {/* BackFlip */}
        <Box sx={flipContainerSx.back.main}>
          {/* fabric overlay */}
          {children}
          <Paper elevation={1} sx={flipContainerSx.fabric.main} />
        </Box>
      </Box>
    </Box>
  );
}
export const BtnFlipContainer = memo(({ active }) => {
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
        <Box sx={flipContainerSx.back.btn} />
      </Box>
    </Box>
  );
});
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

export const SmallBtnFlipContainer = memo(({ active }) => {
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
        <Box sx={flipContainerSx.back.smBtn} />
      </Box>
    </Box>
  );
});
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
