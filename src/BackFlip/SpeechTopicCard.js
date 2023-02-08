import React, { useContext } from "react";
import { Box } from "@mui/material";
import { flexBoxSx, breadSx } from "../SXstyles";
import { gameContext } from "../Context/GameStatusContext";
import { topicContext } from "../Context/TopicContext";
import { timerContext } from "../Context/TimerContext";

function SpeechTopicCard({ timer }) {
  const game = useContext(gameContext);
  const currentTopic = useContext(topicContext);

  return (
    <Box sx={speechTopicCardSx}>
      <Box sx={breadSx}>{timer.seconds >= 0 ? `:${timer.seconds}` : ""}</Box>
      <Box
        sx={{
          ...flexBoxSx,
          lineHeight: "1.5",
          textAlign: "left",
        }}
      >
        {(game.status === "topic" || game.status === "speech") && currentTopic}
        {game.status === "result" && "round over"}
        {game.status === "rules" && "Rules"}
      </Box>
      <Box sx={breadSx} />
    </Box>
  );
}

export default SpeechTopicCard;

const speechTopicCardSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.5rem" },
  padding: { xs: ".75rem", sm: ".75rem", md: "1.5rem", lg: "1rem 2rem" },
  zIndex: 10,
};
