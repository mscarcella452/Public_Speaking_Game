import React, { useContext } from "react";
import { Box, Paper, useMediaQuery } from "@mui/material";
import { flexBoxSx, breadSx, Sx, fabricBackgroundSx } from "../Styles/SXstyles";
import { gameContext } from "../Context/GameStatusContext";
import { topicContext } from "../Context/TopicContext";
import { timerContext } from "../Context/TimerContext";

function RulesCard() {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const currentTopic = useContext(topicContext);
  const galaxyFoldLandscape = useMediaQuery("(max-width: 300px)");

  return (
    <Box sx={speechTopicCardSx}>
      {/* <Box sx={breadSx}>{timer.seconds >= 0 ? `:${timer.seconds}` : ""}</Box> */}
      <Box
        sx={{
          ...flexBoxSx,
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "scroll",
          gap: {
            galaxyFold: "1.25rem",
            mobile: "1rem",
            xs: "1.25rem",
            sm: "1.5rem",
            md: "1.5rem",
            lg: "1.5rem",
            xl: "2.5rem",
          },
          fontWeight: "bold",
          textAlign: "left",
          fontSize: {
            galaxyFold: "14px",
            mobile: "15px",
            xs: "19.5px",
            sm: "20px",
            md: "22px",
            lg: "23px",
            xl: "25px",
          },

          "@media (min-height: 1024px)": {
            fontSize: {
              sm: "25px",
              md: "25px",
              lg: "25px",
              xl: "30px",
            },
            gap: {
              md: "2rem",
              lg: "2.5rem",
              xl: "2.75rem",
            },
          },
          "@media (min-height: 1300px)": {
            fontSize: "30px",
          },

          "@media (max-height: 540px)": {
            fontSize: {
              galaxyFold: "14px",
              mobile: "15px",
              xs: "13px",
              sm: "15px",
              md: "15px",
              lg: "20px",
            },
          },

          // fontWeight: "",
          fontFamily: Sx.font.card,
        }}
      >
        <Box
          sx={{
            width: "100%",
            lineHeight: {
              galaxyFold: "1rem",
              mobile: "1.5rem",
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
              lg: "2.25rem",
              xl: "2.5rem",
            },
            "@media (min-height: 1024px)": {
              lineHeight: { md: "2.25rem", lg: "3rem" },
            },
            "@media (max-height: 414px)": {
              lineHeight: {
                sm: "1.4rem",
                md: "1.5rem",
                lg: "2.1rem",
                xl: "3rem",
              },
            },
          }}
        >
          When it's your turn, you will give a 40 second improptu speech on a
          random topic. You might be asked to explain quantum physics (good
          f*cken luck) or to tell the story of how you broke your arm that one
          time at magic camp. It doesn't matter if you're not an expert on the
          topic or if the story you're asked to tell never happened to you...
        </Box>
        <Box
          style={{
            ...flexBoxSx,
            height: "auto",
            flexDirection: "column",
            justifyContent: "flex-start",
            margin: "0",
            borderRadius: "5px",
            fontWeight: "500",
            gap: "1.25rem",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              width: "100%",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            You just have to follow three rules:
          </span>
          <Box
            sx={{
              ...flexBoxSx,
              // background: {
              //   xs: "red",
              //   sm: "yellow",
              //   md: "teal",
              //   lg: "green",
              //   xl: "blue",
              // },
              flexDirection: {
                galaxyFold: "column",
                mobile: "column",
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              "@media (min-height: 1024px)": {
                flexDirection: { md: "column", lg: "row" },
                gap: "2rem",
                marginTop: "1rem",
              },
              padding: {
                galaxyFold: "0 .5rem",
                mobile: "0",
                xs: "0",
                sm: "0 .25rem",
                md: "0 2rem",
                lg: "0 1rem",
                xl: "0 2rem",
              },
              maxWidth: {
                galaxyFold: "100%",
                xs: "400px",
                sm: "525px",
                md: "100%",
                // lg: "750px",
                // xl: "100%",
              },
              height: "auto",
              alignItems: "flex-start",
              justifyContent: "space-around",
              margin: "0",
              gap: "1rem",
              textAlign: "left",

              // background: "Red",
            }}
          >
            <Paper elevation={2} sx={rulesBoxesSx}>
              1. Your speech must last the full 40 seconds.
            </Paper>
            <Paper elevation={2} sx={rulesBoxesSx}>
              2. You must attempt to stay relevant to the topic.
              {/* 2. You must stay relevant to the topic. (best of your ability) */}
            </Paper>
            <Paper elevation={2} sx={rulesBoxesSx}>
              3. No pausing, hesitating, saying 'Umm', 'Uhh', etc.
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
        </Box>
        <Box
          sx={{
            width: "100%",
            margin: "0",
            textAlign: "center",
            // maxWidth: { galaxyFold: "100%", sm: "400px", md: "100%" },
          }}
        >
          Tap the{" "}
          <span
            style={{
              fontWeight: "bold",
              color: Sx.color.primary,
              textDecoration: "underline",
            }}
          >
            'FAILED SPEECH'
          </span>{" "}
          button if you fail to follow the rules.
        </Box>
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
  padding: {
    galaxyFold: ".75rem",
    mobile: ".75rem",
    xs: ".75rem",
    sm: ".75rem",
    md: ".75rem",
    lg: "1rem 2rem",
  },
  zIndex: 10,
};

const rulesBoxesSx = {
  ...flexBoxSx,
  padding: ".5rem",
  borderRadius: "5px",
  ...fabricBackgroundSx,
  backgroundColor: "gold",
  // color: "#fff",
};
