import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useToggle } from "../../CustomHooks";
import { Card, Paper, Button, Box, Typography } from "@mui/material";
import GameTimer from "../../ComponentHelpers/GameTimer";
import { flexBoxSx, containerSx, marginSx, pageSx } from "../../SXstyles";
import ActionButton from "../../ComponentHelpers/ActionButton";

export default function Game({
  currentQuestion,
  failedSpeech,
  completedSpeech,
  timerActive,
  toggleTimer,
}) {
  const nav = useNavigate();

  return (
    <Box
      sx={{
        ...containerSx,
        zIndex: 5,
        gap: ".5rem",
      }}
    >
      <Box sx={{ ...flexBoxSx }}>
        <Card
          sx={{
            ...flexBoxSx,
            padding: "1rem",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1rem",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "95%",
              xl: "40%",
            },
            height: "auto",
            minHeight: "400px",
            maxHeight: "100%",
            padding: "1.5rem",
            fontSize: "3rem",
            // borderRadius: "20px",

            // color: "#fff",
            // backgroundColor: "#981010",
          }}
        >
          <Typography
            sx={{
              ...flexBoxSx,
              width: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "2.5rem",
              },
            }}
          >
            {currentQuestion}
          </Typography>
          <Box sx={{ ...flexBoxSx, background: "teal", gap: ".25rem" }}>
            <Button variant='contained' onClick={toggleTimer}>
              Start
            </Button>
            <Button variant='contained' onClick={failedSpeech}>
              Failed Speech
            </Button>
            {/* {timerActive && (
                <GameTimer
                  isActive={timerActive}
                  initialValue={30}
                  completedSpeech={completedSpeech}
                />
              )} */}
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
