import React, { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { Textfit } from "react-textfit";
import { flexBoxSx, Sx, absolutePositionSx } from "../../Styles/SXstyles";
import { gameContext } from "../../Context/GameStatusContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function TopCardMargin({ label, timer }) {
  const game = useContext(gameContext);
  const screen = useContext(mediaQueryContext);
  const marginHeight = screen.lg
    ? "70px"
    : screen.md
    ? "55px"
    : screen.sm
    ? "50px"
    : screen.xs
    ? "30px"
    : "40px";
  const componentWidth = screen.lg
    ? "170px"
    : screen.md
    ? "140px"
    : screen.sm
    ? "100px"
    : screen.xs
    ? "75px"
    : "90px";
  return (
    <Box
      sx={{
        ...CardMarginSx,
        ...(game.status === "result" && resultTagPosition),
        height: marginHeight,
      }}
    >
      <Box
        sx={{
          ...marginLabel,
          width: componentWidth,
          color:
            game.status === "result" || game.status === "intermission"
              ? "#fff"
              : "black",
        }}
      >
        <Textfit
          min={1}
          max={100}
          mode='single'
          style={{
            ...flexBoxSx,
            paddingRight: ".15rem",
            justifyContent: "flex-start",
            // alignItems: "flex-start",
          }}
        >
          {label}
        </Textfit>
      </Box>
      {game.status !== "result" && (
        <Paper sx={{ ...timerSx, width: componentWidth }}>
          <Textfit min={1} max={80} style={flexBoxSx}>
            {timer}
          </Textfit>
        </Paper>
      )}
    </Box>
  );
}

export default TopCardMargin;

const CardMarginSx = { ...flexBoxSx, justifyContent: "space-between" };

const timerSx = {
  ...flexBoxSx,
  height: "90%",
  boxShadow: `-2.5px 2.5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
  fontFamily: Sx.font.number,
  fontWeight: "bold",
  background: Sx.color.primary,
  color: "#fff",
};

const resultTagPosition = {
  ...absolutePositionSx,
  top: "1rem",
  left: "1rem",
};

const marginLabel = {
  opacity: 0.35,
  zIndex: -2,
  fontFamily: Sx.font.display,
};
