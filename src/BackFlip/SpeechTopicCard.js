import React, { useContext } from "react";
import { Paper, Box, useMediaQuery } from "@mui/material";
import FitText from "@plutonium-js/react-fit-text";
import { flexBoxSx, Sx, fabricOverlaySx, mainTextSx } from "../Styles/SXstyles";
import { topicContext } from "../Context/TopicContext";
import { timerContext } from "../Context/TimerContext";
import { mediaQueryContext } from "../Context/mediaQueryContext";

function SpeechTopicCard() {
  const timer = useContext(timerContext);
  const currentTopic = useContext(topicContext);
  const screen = useContext(mediaQueryContext);
  // const { largeScreen, mediumScreen, smallScreen, tinyScreen, justifyText } =
  //   useContext(mediaQueryContext);

  return (
    <Box sx={speechTopicCardSx}>
      <Box sx={primaryColorOverlaySx} />
      <Box
        sx={{
          ...CardMarginSx,
          height: screen.lg
            ? "70px"
            : screen.xs
            ? "45px"
            : {
                galaxyFold: "45px",
                mobile: "45px",
                xs: "50px",
                // sm: "50px",
                md: "55px",
                // lg: "55px",
                // xl: "55px",
              },
        }}
      >
        <Box sx={{ opacity: 0.5, ...marginContainerSx }}>
          <FitText
            minSize={20}
            maxSize={screen.lg ? 50 : screen.md ? 40 : screen.sm ? 30 : 25}
            updateOnResize={{ delay: 0 }}
            style={{ ...flexBoxSx, justifyContent: "flex-start" }}
          >
            Prompt:
          </FitText>
        </Box>
        <Paper sx={timerSx}>
          <FitText
            minSize={20}
            maxSize={screen.lg ? 55 : screen.md ? 45 : screen.sm ? 35 : 30}
            updateOnResize={{ delay: 0 }}
            style={{ ...flexBoxSx }}
          >
            {timer.seconds >= 0 ? `:${timer.seconds}` : ""}
          </FitText>
        </Paper>
      </Box>
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
        {currentTopic}
      </FitText>
      <Paper sx={{ ...fabricOverlaySx, opacity: 0.2 }} />
      {/* <Box sx={BottomBumperSx} /> */}
    </Box>
  );
}

export default SpeechTopicCard;

const speechTopicCardSx = {
  ...flexBoxSx,
  fontWeight: "bold",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: {
    galaxyFold: ".75rem",
    mobile: ".75rem",
    xs: "1.25rem",
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1.5rem",
  },
  fontFamily: Sx.font.card,
  padding: {
    galaxyFold: ".75rem",
    mobile: ".75rem",
    xs: "1.25rem",
    sm: "1.25rem",
    md: "1.25rem",
    lg: "2rem",
  },

  "@media (min-height: 1024px)": {
    gap: "1.5rem",
    padding: "1.5rem",
  },
  "@media (max-height: 414px)": {
    gap: "1rem",
    padding: { galaxyFold: ".5rem", sm: ".75rem" },
  },
  "@media (max-height: 280px)": { padding: ".35rem .75rem" },
  zIndex: 10,
};

// ---------------------------------------------------------------------------------------------------
const primaryColorOverlaySx = {
  height: 1,
  width: 1,
  background: Sx.color.primary,
  position: "absolute",
  top: 0,
  bototm: 0,
  right: 0,
  left: 0,
  opacity: 0.15,
  zIndex: -1,
};
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
const CardMarginSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  // border: ".25px solid black",
  // background: {
  //   galaxyFold: "purple",
  //   mobile: "silver",
  //   xs: "teal",
  //   sm: "yellow",
  //   md: "red",
  //   lg: "green",
  //   xl: "blue",
  // },
  fontFamily: Sx.font.card,
  color: "black",
};

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// const promptSx = {
//   opacity: ".5",
//   fontSize: {
//     galaxyFold: "22px",
//     mobile: "24px",
//     xs: "24px",
//     sm: "26px",
//     md: "28px",
//     lg: "32px",
//     xl: "34px",
//   },

//   // max 1024h
//   "@media (min-height: 1024px)": {
//     fontSize: { sm: "28px", md: "32px", lg: "35px", xl: "40px" },
//   },

//   // max 700w
//   "@media (max-height: 700px)": {
//     // lineHeight: { xs: "1.7rem", md: "1.95rem", lg: "2.5rem" },
//     fontSize: {
//       galaxyFold: "25px",
//       mobile: "20px",
//       mobile: "22px",
//       xs: "24px",
//       sm: "24px",
//       md: "24px",
//       lg: "28px",
//     },
//   },

//   // max 411w
//   "@media (max-Width: 414px)": {
//     fontSize: { galaxyFold: "24px", mobile: "24px", xs: "28px" },
//   },

//   // max 414h
//   "@media (max-height: 414px)": {
//     fontSize: {
//       galaxyFold: "25px",
//       mobile: "20px",
//       xs: "22px",
//       sm: "24px",
//       md: "26px",
//       lg: "26px",
//     },
//   },

//   // max 389h
//   "@media (max-height: 389px)": {
//     fontSize: {
//       galaxyFold: "18px",
//       mobile: "22px",
//       xs: "22px",
//       sm: "22px",
//       md: "26px",
//       lg: "28px",
//     },
//   },
//   // max 360h
//   "@media (max-height: 360px)": {
//     fontSize: {
//       galaxyFold: "16px",
//       mobile: "16px",
//       xs: "19px",
//       sm: "19px",
//       md: "22px",
//       lg: "30px",
//     },
//   },
//   // max 340w
//   "@media (max-width: 340px)": {
//     fontSize: {
//       galaxyFold: "18px",
//       mobile: "22px",
//     },
//   },
// };

// ------------------------------------------------------------------
// ------------------------------------------------------------------

const marginContainerSx = {
  ...flexBoxSx,
  width: { galaxyFold: "70px", mobile: "75px", xs: "95px" },
  "@media (max-height: 340px)": {
    width: { galaxyFold: "70px", xs: "75px" },
  },
};
const timerSx = {
  ...marginContainerSx,
  height: "90%",
  boxShadow: `-2.5px 2.5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
  fontFamily: Sx.font.number,
  fontWeight: "bold",
  background: Sx.color.primary,
  color: "#fff",
};

// const BottomBumperSx = {
//   width: "100%",
//   ...marginHeightSx,
//   minHeight: 0,
//   // background: {
//   //   galaxyFold: "purple",
//   //   mobile: "silver",
//   //   xs: "teal",
//   //   sm: "yellow",
//   //   md: "red",
//   //   lg: "green",
//   //   xl: "blue",
//   // },
// };
