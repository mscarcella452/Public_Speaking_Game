import React, { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, fabricOverlaySx, Sx } from "../Styles/SXstyles";
import { gameContext } from "../Context/GameStatusContext";
import { topicContext } from "../Context/TopicContext";
import { timerContext } from "../Context/TimerContext";

function RoundOverCard() {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const currentTopic = useContext(topicContext);

  return (
    <Paper
      sx={{
        ...RoundOverCardSx,
        backgroundColor: game.failSpeech
          ? Sx.color.secondary
          : Sx.color.success,
      }}
    >
      <Paper sx={fabricOverlaySx} />
      {/* {game.failSpeech ? "fail" : "success"} */}
      <Box sx={{ ...flexBoxSx, background: "transparent" }}>
        {game.failSpeech
          ? "You don't speak too good."
          : "You said something good with your words."}
      </Box>
    </Paper>
  );
}

export default RoundOverCard;

const RoundOverCardSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
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
