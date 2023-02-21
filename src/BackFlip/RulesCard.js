import React, { useContext } from "react";
import { Box, Paper, useMediaQuery } from "@mui/material";
import { flexBoxSx, breadSx, Sx, fabricBackgroundSx } from "../Styles/SXstyles";
import RulesBox from "../ComponentHelpers/RulesBox";
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
            xs: "1rem",
            sm: "1.5rem",
            lg: "1.75rem",
          },
          fontSize: {
            galaxyFold: "14px",
            mobile: "17px",
            xs: "20px",
            sm: "21px",
            md: "22px",
            lg: "23px",
            xl: "25px",
          },

          "@media (min-height: 1024px)": {
            fontSize: {
              sm: "25px",
              md: "25px",
              lg: "25px",
              xl: "28px",
            },
            gap: "2.5rem",
          },
          "@media (min-height: 1300px)": {
            fontSize: "30px",
            gap: "3.5rem",
          },

          "@media (max-height: 668px)": {
            fontSize: {
              galaxyFold: "14px",
              mobile: "15px",
              xs: "14px",
              sm: "14px",
              md: "15.5px",
            },
          },
          "@media (max-Width: 414px)": {
            gap: "1rem",
            fontSize: {
              galaxyFold: "14px",
              mobile: "15.5px",
              xs: "17px",
              sm: "20px",
              md: "20px",
              lg: "22px",
            },
          },
          "@media (max-height: 375px)": {
            fontSize: {
              galaxyFold: "14px",
              mobile: "15px",
              xs: "14px",
              sm: "13px",
              md: "14.5px",
              lg: "16px",
            },
            gap: {
              galaxyFold: "1.25rem",
              mobile: "1rem",
              xs: "1.25rem",
              md: ".75rem",
            },
          },
          fontWeight: "bold",
          textAlign: "left",

          fontFamily: Sx.font.card,
        }}
      >
        <Box
          sx={{
            width: "100%",
            lineHeight: {
              galaxyFold: "1rem",
              mobile: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
              xl: "2.5rem",
            },
            "@media (min-height: 1024px)": {
              lineHeight: { md: "2.25rem", lg: "3rem" },
            },

            "@media (max-height: 668px)": {
              lineHeight: { md: "1.65rem" },
            },
            "@media (max-height: 414px) and (max-width: 915px)": {
              lineHeight: {
                sm: "1.25rem",
                md: "1.25rem",
                lg: "1.5rem",
                xl: "3rem",
              },
            },
            "@media (max-width: 414px)": {
              lineHeight: { xs: "1.95rem" },
            },

            textAlign: "justify",
          }}
        >
          When it's your turn, you will give a 40 second improptu speech on a
          random topic. You might be asked to explain quantum physics (good
          f*cken luck) or to tell the story of how you broke your arm that one
          time at magic camp. It doesn't matter if you're not an expert on the
          topic or if the story you're asked to tell never happened to you...
        </Box>
        <Box
          sx={{
            ...flexBoxSx,
            height: "auto",
            flexDirection: "column",
            justifyContent: "flex-start",
            borderRadius: "5px",
            fontWeight: "500",
            gap: "1.25rem",
            "@media (max-height: 414px)": { gap: ".75rem" },
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
              flexDirection: { galaxyFold: "column", md: "row" },
              "@media (min-height: 1024px)": {
                flexDirection: "column",
                gap: "2rem",
                marginTop: "1rem",
              },
              "@media (max-height: 414px)": {
                flexDirection: "row",
                maxWidth: {
                  galaxyFold: "100%",
                  md: "650px",
                  lg: "100%",
                },
              },
              padding: {
                galaxyFold: "0 .5rem",
                mobile: "0",
                sm: "0 .25rem",
                md: "0 1rem",
                lg: "0 1rem",
                xl: "0 1.5rem",
              },
              maxWidth: {
                galaxyFold: "100%",
                xs: "400px",
                sm: "525px",
                md: "100%",
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
            <RulesBox>1. Your speech must last the full 40 seconds.</RulesBox>
            <RulesBox>
              2. You must attempt to stay relevant to the topic.
            </RulesBox>
            <RulesBox>
              3. No pausing, hesitating, saying 'Umm', 'Uhh', etc.
            </RulesBox>
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
          If not, tap the{" "}
          <span
            style={{
              fontWeight: "bold",
              color: Sx.color.primary,
              textDecoration: "underline",
            }}
          >
            'FAIL'
          </span>{" "}
          button.
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
  // justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  padding: { galaxyFold: ".75rem", lg: "1rem 2rem" },
  "@media (max-height: 414px)": { padding: { lg: "1rem" } },
  zIndex: 10,
};

const rulesBoxesSx = {
  ...flexBoxSx,
  padding: ".5rem",
  borderRadius: "5px",
  ...fabricBackgroundSx,
  backgroundColor: Sx.color.secondary,
  color: "#fff",
  fontWeight: "100",
};
