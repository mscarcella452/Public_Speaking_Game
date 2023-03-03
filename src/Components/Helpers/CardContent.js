import React, { useContext } from "react";
import FitText from "@plutonium-js/react-fit-text";
import { Textfit } from "react-textfit";
import { Box } from "@mui/material";
import { flexBoxSx, Sx } from "../../Styles/SXstyles";
import { gameContext } from "../../Context/GameStatusContext";
import { topicContext } from "../../Context/TopicContext";
import { timerContext } from "../../Context/TimerContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function CardContent({ children }) {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const currentTopic = useContext(topicContext);
  const screen = useContext(mediaQueryContext);
  return (
    <Box
      sx={{
        ...flexBoxSx,
        // background: "teal",
        fontFamily: Sx.font.card,
        color: "#fff",
        lineHeight: screen.lg || screen.md ? 2 : 1.5,
        textAlign: "center",
        textShadow:
          screen.lg || screen.md
            ? `-2px 2px 0 #000, 1px -2px 0 #000, -1px 2px 0 #000, 1px 2px 0 #000`
            : screen.sm
            ? `-1.5px 1.5px 0 #000, 1px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000`
            : screen.xs
            ? `-1.15px 1.15px 0 #000, 1px -1.15px 0 #000, -1px 1.15px 0 #000, 1px 1.15px 0 #000`
            : `-1.25px 1.25px 0 #000, 1px -1.25px 0 #000, -1px 1.25px 0 #000, 1px 1.25px 0 #000`,
      }}
    >
      <Textfit
        min={1}
        max={
          screen.lg ? 65 : screen.md ? 45 : screen.sm ? 40 : screen.xs ? 28 : 35
        }
        style={{
          ...flexBoxSx,
          // background: "red",
          height: screen.lg || screen.md ? "85%" : "85%",
        }}
      >
        {children}
      </Textfit>
    </Box>
  );
}

export default CardContent;
