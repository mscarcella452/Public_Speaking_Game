import React, { useState, useEffect, useContext } from "react";
import { useInterval } from "../../Helpers/CustomHooks";
import { useToggle } from "../../Helpers/CustomHooks";
import { Paper, Box } from "@mui/material";
import { Sx, mainCardContainerSx } from "../../Styles/SXstyles";
import TopCardMargin from "../Helpers/TopCardMargin";
import CardContent from "../Helpers/CardContent";
import Timer from "../Helpers/Timer";
import { ColorOverlay, FabricOverlay } from "../Helpers/Overlays";
import {
  gameContext,
  gameDispatchContext,
} from "../../Context/GameStatusContext";
import { topicContext } from "../../Context/TopicContext";
import { timerContext } from "../../Context/TimerContext";
import { mediaQueryContext } from "../../Context/mediaQueryContext";

function GameCard({ timer, failSpeech }) {
  // const timer = useContext(timerContext);
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const currentTopic = useContext(topicContext);

  return (
    <Box
      sx={{
        ...mainCardContainerSx,
        backgroundColor:
          game.status === "result" &&
          (failSpeech ? Sx.color.fail : Sx.color.success),
      }}
    >
      <ColorOverlay />
      <TopCardMargin
        label={
          game.status !== "result" ? "TOPIC:" : failSpeech ? "FAIL" : "100%"
        }
        timer={timer}
        // time={game.timer.seconds >= 0 ? `:${game.timer.seconds}` : ""}
      />
      <CardContent>
        {game.status !== "result"
          ? currentTopic
          : failSpeech
          ? "You don't speak too good."
          : "You said something good with your words."}
      </CardContent>

      <FabricOverlay />
    </Box>
  );
}

export default GameCard;
