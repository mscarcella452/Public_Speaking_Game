import React, { useContext } from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, fabricBackgroundSx } from "../Styles/SXstyles";
import { gameContext } from "../Context/GameStatusContext";
import { topicContext } from "../Context/TopicContext";
import { timerContext } from "../Context/TimerContext";

function SpeechTopicCard() {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const currentTopic = useContext(topicContext);

  return (
    <Box sx={speechTopicCardSx}>
      <Box sx={SpeechMarginSx}>
        <Box sx={{ opacity: 0.5 }}>Speech Topic:</Box>
        <Paper sx={timerSx}>
          {timer.seconds >= 0 ? `:${timer.seconds}` : ""}
        </Paper>
      </Box>
      <Box sx={speechTopicSx}>
        <Box
          elevation={1}
          sx={{
            // ...fabricBackgroundSx,
            // backgroundColor: Sx.color.secondary,
            color: Sx.color.secondary,
            borderRadius: "5px",
            padding: ".75rem",
          }}
        >
          {currentTopic}
        </Box>
      </Box>
      <Box sx={BottomBumperSx} />
    </Box>
  );
}

export default SpeechTopicCard;

const speechTopicCardSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: {
    galaxyFold: "1rem",
    mobile: "1rem",
    xs: "1.25rem",
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1.5rem",
  },
  cursor: "auto",
  fontFamily: Sx.font.card,
  padding: {
    galaxyFold: "1rem .5rem",
    mobile: "1rem",
    xs: "1.25rem",
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1rem 2rem",
  },

  "@media (min-height: 1024px)": {
    gap: "1.5rem",
    padding: "1.5rem",
  },
  "@media (max-height: 414px)": {
    gap: ".5rem",
    padding: { galaxyFold: ".25rem .75rem", sm: ".5rem 1rem" },
  },
  "@media (max-height: 280px)": { padding: ".35rem .75rem" },
  zIndex: 10,
};

const SpeechMarginSx = {
  // background: "Red",
  ...flexBoxSx,
  justifyContent: "space-between",
  height: { galaxyFold: "30px", xs: "40px", md: "40px", lg: "50px" },
  "@media (max-height: 414px)": {
    minHeight: { galaxyFold: "30px", md: "40px" },
  },
  fontWeight: "bold",
  fontFamily: Sx.font.card,
  fontSize: {
    galaxyFold: "18px",
    mobile: "20px",
    xs: "22px",
    sm: "22px",
    md: "22px",
    lg: "25px",
    xl: "25px",
  },
  "@media (max-height: 540px)": {
    fontSize: {
      galaxyFold: "18px",
      mobile: "18px",
      xs: "20px",
      sm: "20px",
      md: "20px",
      lg: "22px",
      xl: "25px",
    },
  },
  "@media (min-height: 1024px)": {
    fontSize: {
      galaxyFold: "25px",
      mobile: "25px",
      xs: "28px",
      sm: "28px",
      md: "28px",
      lg: "30px",
      xl: "35px",
    },
    height: "60px",
  },
  color: "black",
  // background: "teal",
};

const timerSx = {
  ...flexBoxSx,
  width: {
    galaxyFold: "75px",
    mobile: "100px",
    xs: "110px",
    sm: "90px",
    md: "100px",
    lg: "120px",
  },
  padding: ".5rem",
  borderRadius: "5px",
  ...fabricBackgroundSx,
  backgroundColor: Sx.color.primary,
  color: "#fff",
  fontSize: {
    galaxyFold: "22px",
    mobile: "25px",
    xs: "25px",
    sm: "22px",
    md: "22px",
    lg: "25px",
    xl: "25px",
  },
  "@media (min-height: 1024px)": {
    fontSize: {
      galaxyFold: "25px",
      mobile: "25px",
      xs: "30px",
      sm: "30px",
      md: "30px",
      lg: "35px",
      xl: "40px",
    },
    width: "130px",
  },
};

const speechTopicSx = {
  ...flexBoxSx,
  lineHeight: "1.5",
  textAlign: "center",
  // textAlign: { galaxyFold: "center", xs: "justify", md: "center" },
  fontSize: {
    galaxyFold: "22px",
    mobile: "25px",
    xs: "35px",
    sm: "35px",
    md: "35px",
    lg: "40px",
    xl: "40px",
  },

  "@media (min-height: 1024px)": {
    fontSize: {
      sm: "30px",
      md: "35px",
      lg: "40px",
      xl: "45px",
    },
  },
  "@media (min-height: 1300px)": {
    fontSize: "50px",
  },

  "@media (max-height: 540px)": {
    fontSize: {
      galaxyFold: "18px",
      mobile: "18px",
      xs: "20px",
      sm: "20px",
      md: "25px",
      lg: "30px",
      xl: "30px",
    },
  },
};

const BottomBumperSx = {
  width: "100%",
  height: "50px",
  maxHeight: "50px",
  "@media (min-height: 1024px)": {
    height: "60px",
    maxHeight: "60px",
  },
  minHeight: 0,
  // background: "teal",
};
