import React, { useContext } from "react";
import { Sx, absolutePositionSx } from "../../Styles/SXstyles";
import { Paper, Box } from "@mui/material";
import { gameContext } from "../../Context/GameStatusContext";

export function ColorOverlay() {
  const game = useContext(gameContext);
  return (
    <Box
      sx={{
        ...ColorOverlaySx,
        background: game.status !== "result" ? Sx.color.primary : "black",
      }}
    />
  );
}

const ColorOverlaySx = {
  ...absolutePositionSx,
  opacity: 0.2,
  zIndex: -1,
};

// -------------------------------

export function FabricOverlay({ zIndex, backgroundSize }) {
  return <Paper sx={{ ...fabricOverlaySx, zIndex, ...backgroundSize }} />;
}

// const fabricBackgroundSx = {
//   // background: `url(https://www.transparenttextures.com/patterns/navy.png) no-repeat center`,
//   // backgroundSize: "cover",
//   // background: `url("https://www.transparenttextures.com/patterns/old-wall.png") repeat center`,
//   // backgroundSize: "1%",
//   background: `url("https://www.transparenttextures.com/patterns/navy.png") repeat center`,
//   backgroundSize: { galaxyFold: "100%", sm: "75%", lg: "50%" },
//   // background: `url("https://www.transparenttextures.com/patterns/woven-light.png") repeat center`,
//   // backgroundSize: ".5%",
// };

export const fabricOverlaySx = {
  ...absolutePositionSx,
  zIndex: 7,
  opacity: 0.4,
  background: `url("https://www.transparenttextures.com/patterns/navy.png") repeat center`,
  backgroundSize: { galaxyFold: "100%", sm: "75%", lg: "50%" },
};

// export const resultFabricOverlaySx = {
//   ...overlaySx,
//   background: `url("https://www.transparenttextures.com/patterns/basketball.png") repeat center`,
//   backgroundSize: "100px",
// };
