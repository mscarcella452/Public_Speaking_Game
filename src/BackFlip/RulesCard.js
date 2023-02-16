import React, { useContext } from "react";
import { Box, Paper } from "@mui/material";
import { flexBoxSx, breadSx, Sx, fabricBackgroundSx } from "../Styles/SXstyles";
import { gameContext } from "../Context/GameStatusContext";
import { topicContext } from "../Context/TopicContext";
import { timerContext } from "../Context/TimerContext";

function RulesCard() {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const currentTopic = useContext(topicContext);

  return (
    <Box sx={speechTopicCardSx}>
      {/* <Box sx={breadSx}>{timer.seconds >= 0 ? `:${timer.seconds}` : ""}</Box> */}
      <Box
        sx={{
          ...flexBoxSx,
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "scroll",
          gap: ".75rem",
          // lineHeight: "1.25",
          textAlign: "left",
          fontSize: {
            xs: "18px",
            sm: "15px",
            md: "18px",
            lg: "20px",
            xl: "25px",
          },
          // fontWeight: "",
          // fontFamily: Sx.font.display,
        }}
      >
        <p style={{ width: "100%", margin: "0" }}>
          When it's your turn, you will give a 30 second improptu speech on a
          random topic. You might be asked to explain quantum physics (good
          f*ucken luck) or to tell the story of how you broke your arm that one
          time at magic camp. It doesn't matter if youre not an expert on the
          topic or if the story you're asked to tell never happened to you...
        </p>
        {/* <p style={{ width: "100%", margin: "0" }}>
          You might be asked to explain quantum physics (Good f*ucken luck) or
          to tell the story of how you broke your arm that one time at magic
          camp.
        </p>
        <p style={{ width: "100%", margin: "0" }}>
          It doesn't matter if youre not an expert on the topic or if the story
          you're asked to tell never happened to you.
        </p> */}
        <div
          style={{
            ...flexBoxSx,
            height: "auto",
            flexDirection: "column",
            justifyContent: "flex-start",
            margin: "0",
            borderRadius: "5px",
            padding: "1rem",
            fontWeight: "500",
            gap: "1rem",
          }}
        >
          <span
            style={{
              width: "100%",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            You just have to follow these rules:
          </span>
          <Box
            sx={{
              ...flexBoxSx,
              background: {
                xs: "red",
                sm: "yellow",
                md: "teal",
                lg: "green",
                xl: "blue",
              },
              flexDirection: { xs: "column", sm: "column", md: "row" },
              height: "auto",
              alignItems: "flex-start",
              justifyContent: "space-around",
              margin: "0",
              gap: "1rem",
              textAlign: "left",

              // background: "Red",
            }}
          >
            <Paper
              sx={{
                ...flexBoxSx,
                padding: ".75rem",
                borderRadius: "5px",
                ...fabricBackgroundSx,
                // color: Sx.color.primary,
              }}
            >
              1. The speech must last the full 30 seconds.
            </Paper>
            <Paper
              sx={{
                ...flexBoxSx,
                padding: ".75rem",
                borderRadius: "5px",
                ...fabricBackgroundSx,
                // color: Sx.color.primary,
              }}
            >
              2. You must stay relevant to the topic. (best of your ability)
            </Paper>
            <Paper
              sx={{
                ...flexBoxSx,
                padding: ".75rem",
                borderRadius: "5px",
                ...fabricBackgroundSx,
                // color: Sx.color.primary,
              }}
            >
              3. No pausing, hesitating, or saying 'Umm', 'Uhh', etc.
            </Paper>

            {/* <div style={{ width: "auto", background: "blue" }}>
              <p style={{ width: "100%", background: "Red" }}>
                - No Pausing. No Hesitating. No saying Umm, Uhh, etc
              </p>
              <p style={{ width: "100%", background: "Red" }}>
                - No Heistating
              </p>
              <p style={{ width: "100%", background: "Red" }}>
                - No saying Umm, Uhh, etc
              </p>
            </div> */}
          </Box>
        </div>
        <p style={{ width: "100%", margin: "0", textAlign: "center" }}>
          If any of these rules aren't followed, tap the{" "}
          <span
            style={{
              fontWeight: "bold",
              color: Sx.color.primary,
              textDecoration: "underline",
            }}
          >
            'FAILED SPEECH'
          </span>{" "}
          button.
        </p>
      </Box>
      {/* <Box sx={breadSx} /> */}
    </Box>
  );
}

export default RulesCard;

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
