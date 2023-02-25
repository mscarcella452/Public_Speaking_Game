import React from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx, Sx } from "../Styles/SXstyles";

function Logo() {
  return (
    <Paper elevation={0} sx={logoSx}>
      <Box sx={cartoonSx} />
      <Box sx={{ ...flexBoxSx, padding: "1rem" }}>Public Speaking</Box>
    </Paper>
  );
}

export default Logo;

const logoSx = {
  ...flexBoxSx,
  background: "transparent",
  position: "relative",
  color: "#fff",
  lineHeight: "1",
  textAlign: "center",
  textDecoration: `underline ${Sx.color.secondary}`,
  textShadow: `-8px 8px 0 #000, 1px -4px 0 #000, -1px 4px 0 #000, 1px 4px 0 #000`,
  backgroundSize: { galaxyFold: "70px", mobile: "150px", xs: "210px" },
  fontSize: {
    galaxyFold: "90px",
    mobile: "130px",
    xs: "140px",
    sm: "170px",
    lg: "180px",
  },

  // max 1024h
  "@media (min-height: 1024px)": {
    fontSize: { sm: "190px", md: "210px", lg: "220px", xl: "225px" },
    backgroundSize: "250px",
  },

  // max 1300h
  "@media (min-height: 1300px)": {
    fontSize: { sm: "190px", md: "210px", lg: "240px" },
    backgroundSize: "350px",
  },

  // max 700w
  "@media (max-height: 700px) and  (min-width: 500px)": {
    fontSize: { sm: "160px", md: "150px", lg: "180px" },
  },

  // max 411w
  "@media (max-Width: 414px)": {
    fontSize: { galaxyFold: "70px", mobile: "85px", xs: "105px" },
    textShadow: `-5px 5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
    backgroundSize: { galaxyFold: "150px", xs: "210px" },
  },

  // max 414h
  "@media (max-height: 414px)": {
    fontSize: {
      galaxyFold: "70px",
      mobile: "90px",
      xs: "90px",
      sm: "105px",
      md: "130px",
    },
    backgroundSize: { mobile: "100px" },
    textShadow: `-5px 5px 0 #000, 1px -2.5px 0 #000, -1px 2.5px 0 #000, 1px 2.5px 0 #000`,
  },

  // max 393h
  "@media (max-height: 393px)": {
    fontSize: {
      galaxyFold: "70px",
      mobile: "90px",
      xs: "100px",
      sm: "105px",
      md: "130px",
    },
  },
  // max 360h
  "@media (max-height: 360px)": {
    fontSize: {
      galaxyFold: "70px",
      mobile: "75px",
      xs: "75px",
      sm: "105px",
      md: "115px",
    },
    backgroundSize: "90px",
  },
};

const cartoonSx = {
  // background: `url("https://webstockreview.net/images/anxiety-clipart-transparent-7.png") no-repeat center`,
  background: `url("https://clipground.com/images/anxiety-fear-clipart-1.png") repeat center`,
  // background: `url("https://easydrawingguides.com/wp-content/uploads/2020/10/Cartoon-Angry-Face-Step-10.png") repeat center`,
  // backgroundSize: "210px",
  backgroundSize: "inherit",
  opacity: 0.8,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
};
