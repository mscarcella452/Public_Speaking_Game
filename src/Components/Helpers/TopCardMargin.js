import React, { useContext } from "react";
import { Paper, Box } from "@mui/material";
import FitText from "@plutonium-js/react-fit-text";
import { flexBoxSx, Sx, absolutePositionSx } from "../../Styles/SXstyles";

import { gameContext } from "../../Context/GameStatusContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function TopCardMargin({ label, time }) {
  const game = useContext(gameContext);
  const screen = useContext(mediaQueryContext);
  return (
    <Box
      sx={{
        ...CardMarginSx,
        ...(game.status === "result" && absolutePositionSx),
        paddingLeft: game.status === "result" && "1rem",
        height:
          game.status !== "result"
            ? screen.lg
              ? "70px"
              : screen.xs
              ? "45px"
              : { galaxyFold: "45px", xs: "50px", md: "55px" }
            : screen.lg || screen.md
            ? "150px"
            : screen.xs
            ? "40px"
            : { galaxyFold: "45px", xs: "60px", md: "65px" },
      }}
    >
      <Box
        sx={{
          opacity: 0.5,
          zIndex: -2,
          ...marginContainerSx,
          fontFamily: game.status === "result" ? Sx.font.display : Sx.font.card,
          color: game.status !== "result" ? "black" : "#fff",
        }}
      >
        <FitText
          minSize={20}
          maxSize={
            game.status !== "result"
              ? screen.lg
                ? 50
                : screen.md
                ? 40
                : screen.sm
                ? 35
                : 30
              : 100
          }
          updateOnResize={{ delay: 0 }}
          style={{
            ...flexBoxSx,
            paddingRight: ".15rem",
            justifyContent: "flex-start",
            alignItems: game.status === "result" ? "flex-start" : "center",
          }}
        >
          {label}
        </FitText>
      </Box>
      {game.status !== "result" && (
        <Paper sx={timerSx}>
          <FitText
            minSize={20}
            maxSize={screen.lg ? 55 : screen.md ? 45 : screen.sm ? 35 : 30}
            updateOnResize={{ delay: 0 }}
            style={{ ...flexBoxSx }}
          >
            {time}
          </FitText>
        </Paper>
      )}
    </Box>
  );
}

export default TopCardMargin;

const CardMarginSx = { ...flexBoxSx, justifyContent: "space-between" };

const marginContainerSx = {
  ...flexBoxSx,
  width: { galaxyFold: "70px", mobile: "75px", xs: "95px" },
  "@media (max-height: 340px)": {
    width: { galaxyFold: "70px", xs: "75px" },
  },
};
const timerSx = {
  ...marginContainerSx,
  width: { galaxyFold: "70px", mobile: "75px", xs: "95px" },
  "@media (max-height: 340px)": {
    width: { galaxyFold: "70px", xs: "75px" },
  },
  height: "90%",
  boxShadow: `-2.5px 2.5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
  fontFamily: Sx.font.number,
  fontWeight: "bold",
  background: Sx.color.primary,
  color: "#fff",
};
