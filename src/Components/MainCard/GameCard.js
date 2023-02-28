import React, { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { Sx, mainCardContainerSx } from "../../Styles/SXstyles";
import TopCardMargin from "../Helpers/TopCardMargin";
import CardContent from "../Helpers/CardContent";
import { ColorOverlay, FabricOverlay } from "../Helpers/Overlays";
import { gameContext } from "../../Context/GameStatusContext";
import { topicContext } from "../../Context/TopicContext";
import { timerContext } from "../../Context/TimerContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function GameCard() {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const currentTopic = useContext(topicContext);
  const screen = useContext(mediaQueryContext);

  return (
    <Box
      sx={{
        ...mainCardContainerSx,
        backgroundColor:
          game.status !== "result"
            ? "transparent"
            : game.failSpeech
            ? Sx.color.fail
            : Sx.color.success,
      }}
    >
      <ColorOverlay />
      <TopCardMargin
        label={
          game.status !== "result"
            ? "Prompt:"
            : game.failSpeech
            ? "FAIL"
            : "100%"
        }
        time={timer.seconds >= 0 ? `:${timer.seconds}` : ""}
      />
      <CardContent>
        {game.status !== "result"
          ? currentTopic
          : game.failSpeech
          ? "You don't speak too good."
          : "You said something good with your words."}
      </CardContent>

      <FabricOverlay />
    </Box>
  );
}

export default GameCard;
