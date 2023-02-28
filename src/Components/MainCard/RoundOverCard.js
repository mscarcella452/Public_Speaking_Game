import React, { useContext } from "react";
import FitText from "@plutonium-js/react-fit-text";
import { Paper } from "@mui/material";
import { flexBoxSx, Sx, mainTextSx } from "../../../Styles/SXstyles";
import FabricOverlay from "../Helpers/FabricOverlay";
import { gameContext } from "../Context/GameStatusContext";
import { mediaQueryContext } from "../Context/mediaQueryContext";

function RoundOverCard() {
  const game = useContext(gameContext);
  const screen = useContext(mediaQueryContext);

  return (
    <Paper
      sx={{
        ...RoundOverCardSx,
        backgroundColor: game.failSpeech
          ? Sx.color.secondary
          : Sx.color.success,
      }}
    >
      <FabricOverlay />
      <FitText
        minSize={0}
        maxSize={
          screen.lg ? 65 : screen.md ? 45 : screen.sm ? 40 : screen.xs ? 28 : 35
        }
        updateOnResize={{ delay: 0 }}
        style={{
          ...mainTextSx,
          textAlign: screen.justify ? "justify" : "center",
          textShadow:
            screen.lg || screen.md
              ? `-2px 2px 0 #000, 1px -2px 0 #000, -1px 2px 0 #000, 1px 2px 0 #000`
              : screen.sm
              ? `-1.5px 1.5px 0 #000, 1px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000`
              : `-1.25px 1.25px 0 #000, 1px -1.25px 0 #000, -1px 1.25px 0 #000, 1px 1.25px 0 #000`,
        }}
      >
        {game.failSpeech
          ? "You don't speak too good."
          : "You said something good with your words."}
      </FitText>
    </Paper>
  );
}

export default RoundOverCard;

const RoundOverCardSx = {
  ...flexBoxSx,
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
  zIndex: 10,
  position: "relative",
  fontFamily: Sx.font.card,
  color: "#fff",
};

const textureOverlaySx = {
  background: `url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png") repeat center`,
  backgroundSize: "2%",
  // backgroundSize: {
  //   galaxyFold: "100px",
  //   mobile: "100px",
  //   xs: "50px",
  //   sm: "100px",
  //   md: "100px",
  //   lg: "100px",
  // },
  opacity: 1,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 7,
};
