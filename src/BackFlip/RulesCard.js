import React from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx, fabricOverlaySx } from "../Styles/SXstyles";
import RulesBox from "../ComponentHelpers/RulesBox";

function RulesCard() {
  return (
    <Box sx={rulesCardSx}>
      <Paper sx={{ ...fabricOverlaySx, zIndex: -1 }} />
      <Box sx={rulesCardContainerSx}>
        <Box sx={{ width: "100%", textAlign: "justify" }}>
          When it's your turn, you will give a 40 second improptu speech on a
          random topic. You might be asked to explain quantum physics (good
          f*cken luck) or to tell the story of how you broke your arm that one
          time at magic camp. It doesn't matter if you're not an expert on the
          topic or if the story you're asked to tell never happened to you...
        </Box>
        <Box sx={threeRulesContainerSx}>
          <span style={{ textDecoration: "underline" }}>
            You just have to follow three rules:
          </span>
          <Box sx={rulesBoxesContainerSx}>
            <RulesBox>1. Your speech must last the full 40 seconds.</RulesBox>
            <RulesBox>
              2. You must attempt to stay relevant to the topic.
            </RulesBox>
            <RulesBox>
              3. No pausing, hesitating, saying 'Umm', 'Uhh', etc.
            </RulesBox>
          </Box>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
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
    </Box>
  );
}

export default RulesCard;

// style

const rulesCardSx = {
  ...flexBoxSx,
  background: "#fff",
  flexDirection: "column",
  // justifyContent: "flex-start",
  gap: ".5rem",
  cursor: "auto",
  padding: { galaxyFold: ".75rem", lg: "1rem 2rem" },
  "@media (max-height: 414px)": { padding: { lg: "1rem" } },
  zIndex: 10,
};

const rulesCardContainerSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "scroll",
  textAlign: "left",
  fontFamily: Sx.font.card,
  gap: {
    galaxyFold: "1.25rem",
    mobile: "1rem",
    xs: "1rem",
    sm: "1.5rem",
    lg: "1.75rem",
  },
  fontSize: {
    galaxyFold: "15px",
    mobile: "20px",
    xs: "22px",
    sm: "24px",
    md: "26px",
    lg: "26px",
    xl: "28px",
  },

  lineHeight: {
    galaxyFold: "1.25rem",
    mobile: "1.5rem",
    xs: "1.75rem",
    sm: "1.75rem",
    md: "2.25rem",
    xl: "2.3rem",
    xl: "2.4rem",
  },

  // max 1024h
  "@media (min-height: 1024px)": {
    fontSize: { sm: "25px", md: "30px", lg: "32px", xl: "34px" },
  },

  // max 1300h
  "@media (min-height: 1300px)": {
    fontSize: "36px",
    lineHeight: { md: "2.25rem", lg: "3rem" },
  },

  // max 700w
  "@media (max-height: 700px)": {
    lineHeight: { xs: "1.7rem", md: "1.95rem", lg: "2.5rem" },
    fontSize: {
      galaxyFold: "15px",
      mobile: "18px",
      xs: "20px",
      md: "20px",
      lg: "22px",
    },
  },

  // max 411w
  "@media (max-Width: 414px)": {
    fontSize: { galaxyFold: "15px", mobile: "18px", xs: "20px" },
    lineHeight: { xs: "1.95rem" },
  },

  // max 414h
  "@media (max-height: 414px)": {
    fontSize: {
      galaxyFold: "15px",
      mobile: "18px",
      xs: "14px",
      sm: "16px",
      md: "17px",
    },
    gap: "1rem",
    lineHeight: { sm: "1.25rem", md: "1.45rem", lg: "1.85rem", xl: "2.4rem" },
  },

  // max 390h
  "@media (max-height: 389px)": {
    fontSize: {
      galaxyFold: "15px",
      mobile: "15px",
      xs: "15px",
      sm: "15px",
      md: "15px",
      lg: "18px",
    },
    gap: { galaxyFold: "1.25rem", mobile: "1rem", xs: "1.25rem", md: ".75rem" },
  },
};

const threeRulesContainerSx = {
  ...flexBoxSx,
  height: "auto",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "1.25rem",
  "@media (max-height: 414px)": { gap: ".75rem" },
  lineHeight: "normal",
};

const rulesBoxesContainerSx = {
  ...flexBoxSx,
  flexDirection: { galaxyFold: "column", md: "row" },
  height: "auto",
  alignItems: "flex-start",
  justifyContent: "space-around",
  padding: {
    galaxyFold: "0 .5rem",
    mobile: "0",
    sm: "0 .25rem",
    md: "0 1rem",
    lg: "0 1rem",
    xl: "0 1.4rem",
  },
  maxWidth: {
    galaxyFold: "100%",
    xs: "450px",
    sm: "525px",
    md: "100%",
  },
  height: "auto",
  alignItems: "flex-start",
  justifyContent: "space-around",
  gap: "1rem",
  textAlign: "left",
  "@media (min-height: 1024px)": {
    flexDirection: "column",
    gap: "2rem",
    marginTop: "1rem",
  },
  "@media (max-height: 414px)": {
    flexDirection: "row",
    maxWidth: { galaxyFold: "100%", md: "650px", lg: "100%" },
  },
};
