import React, { useContext } from "react";
import { Paper, Box } from "@mui/material";
import FitText from "@plutonium-js/react-fit-text";
import { flexBoxSx, Sx, absolutePositionSx } from "../../Styles/SXstyles";

import { gameContext } from "../../Context/GameStatusContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function TopCardMargin({ label, timer }) {
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
              ? "35px"
              : { galaxyFold: "35px", xs: "50px", md: "55px", lg: "70px" }
            : screen.lg || screen.md
            ? "110px"
            : screen.xs
            ? "40px"
            : { galaxyFold: "45px", xs: "60px", md: "65px" },
      }}
    >
      <Box
        sx={{
          opacity: 0.35,
          zIndex: -2,
          ...labelContainerSx,
          // height:
          //   screen.lg || screen.md
          //     ? "100px"
          //     : screen.xs
          //     ? "40px"
          //     : { galaxyFold: "45px", xs: "60px", md: "65px" },
          fontFamily: Sx.font.display,
          // game.status === "result" || game.status === "intermission"
          //   ? Sx.font.display
          //   : Sx.font.card,
          color:
            game.status === "result" || game.status === "intermission"
              ? "#fff"
              : "black",
          // fontFamily: game.status === "result" ? Sx.font.display : Sx.font.card,
          // color: game.status !== "result" ? "black" : "#fff",
        }}
      >
        <FitText
          minSize={20}
          maxSize={
            100
            // game.status !== "result"
            //   ? screen.lg
            //     ? 50
            //     : screen.md
            //     ? 40
            //     : screen.sm
            //     ? 35
            //     : 30
            //   : 100
          }
          updateOnResize={{ delay: 0 }}
          style={{
            ...flexBoxSx,
            paddingRight: ".15rem",
            justifyContent: "flex-start",
            // alignItems: "flex-start",
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
            {timer}
          </FitText>
        </Paper>
      )}
    </Box>
  );
}

export default TopCardMargin;

const CardMarginSx = { ...flexBoxSx, justifyContent: "space-between" };

const labelContainerSx = {
  ...flexBoxSx,
  width: {
    galaxyFold: "70px",
    mobile: "75px",
    xs: "90px",
    md: "110px",
    lg: "130px",
  },
  "@media (max-height: 340px)": {
    width: { galaxyFold: "70px", xs: "75px" },
  },
};
const timerSx = {
  ...labelContainerSx,
  // width: { galaxyFold: "70px", mobile: "75px", xs: "95px" },
  // "@media (max-height: 340px)": {
  //   width: { galaxyFold: "70px", xs: "75px" },
  // },
  height: "90%",
  boxShadow: `-2.5px 2.5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
  fontFamily: Sx.font.number,
  fontWeight: "bold",
  background: Sx.color.primary,
  color: "#fff",
};
