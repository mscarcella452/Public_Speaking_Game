import backgroundWords from "../Images/backgroundWords.png";
import PublicSpeakingCropped from "../Images/PublicSpeakingCropped.png";

export const Sx = {
  font: {
    display: "'Sunny Spells Basic', sans-serif",
    secondary: "'Averia Libre', cursive",
    number: "'Tilt Neon', cursive",
    card: "'Neucha', cursive",
  },
  color: {
    // fail: "#981010",
    primary: "#457b9d",
    secondary: "#be2f3a",
    success: "#0ead69",
    fail: "#9d6745",
  },
  padding: {
    main: {
      galaxyFold: "1.5rem 1rem",
      mobile: "1.5rem 1rem",
      xs: "1.5rem 1rem",
      sm: "1rem 1.25rem",
      md: "1rem 1.5rem",
      lg: "1rem 2rem",
      xl: "1.5rem 2rem",
    },
  },
  gap: {
    main: {
      gap: {
        galaxyFold: "1rem",
        mobile: "1rem",
        xs: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "2rem",
      },
      "@media (max-height: 414px)": {
        gap: { galaxyFold: ".25rem", xs: ".75rem" },
      },
    },
  },
  justifyContent: "space-around",

  fontSize: {
    logo: {
      fontSize: {
        galaxyFold: "4.5rem",
        mobile: "500%",
        xs: "145px",
        sm: "180px",
      },

      "@media (min-height: 1024px)": { fontSize: "12rem" },
      "@media (min-height: 1300px)": { fontSize: "15rem" },

      "@media (max-height: 512px) ": {
        fontSize: {
          galaxyFold: "4.5rem",
          mobile: "500%",
        },
      },
      "@media (max-Width: 414px)": {
        fontSize: {
          galaxyFold: "4.5rem",
          mobile: "550%",
          xs: "110px",
        },
      },
      "@media (max-Height: 414px)": {
        fontSize: {
          galaxyFold: "4.5rem",
          mobile: "100px",
          xs: "500%",
          sm: "110px",
          md: "125px",
          lg: "130px",
        },
      },
      // "@media (max-Height: 390px)": {
      //   fontSize: {
      //     galaxyFold: "4.5rem",
      //     mobile: "100px",
      //     xs: "95px",
      //     sm: "105px",
      //     lg: "130px",
      //   },
      // },
    },
  },
};

export const flexBoxSx = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
};

export const absolutePositionSx = {
  height: 1,
  width: 1,
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
};

export const backgroundWordsImageSx = {
  background: `url(${backgroundWords}) no-repeat center`,
  backgroundSize: "cover",
};

export const backgroundWordsOverlaySx = {
  ...backgroundWordsImageSx,
  ...flexBoxSx,
  justifyContent: "flex-start",
  flexDirection: "column",
  ...absolutePositionSx,
  boxSizing: "border-box",
  zIndex: 7,
  height: "100vh",
  padding: Sx.padding.main,
  gap: "1rem",
  // overflow: "scroll",
};

export const footerSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  minHeight: { galaxyFold: "40px", lg: "50px", xl: "60px" },
  height: { galaxyFold: "50px", lg: "70px", xl: "70px" },
  "@media (min-height: 1024px)": { height: "80px" },

  gap: { galaxyFold: ".75rem", mobile: ".75rem", xs: "1rem" },
};
export const HeaderSx = {
  ...flexBoxSx,
  justifyContent: "space-between",
  height: "40px",
  minHeight: { galaxyFold: "30px", xl: "40px" },
  "@media (min-height: 1024px)": { height: "60px" },
};

export const logoImageSx = {
  width: "100%",
  height: "100%",
  background: `url(${PublicSpeakingCropped}) no-repeat center`,
  backgroundSize: "contain",
};

export const mainBoxSx = {
  ...flexBoxSx,
  minHeight: "100px",
  height: {
    galaxyFold: "100%",
    mobile: "550px",
    xs: "650px",
    sm: "475px",
    md: "475px",
    lg: "450px",
    xl: "450px",
  },
  maxHeight: "100%",
  maxWidth: {
    galaxyFold: "100%",
    mobile: "100%",
    xs: "500px",
    sm: "600px",
    md: "700px",
    lg: "950px",
    xl: "1050px",
  },
  "@media (min-height: 1024px)": {
    height: { xs: "100%", sm: "750px", md: "650px", lg: "650px", xl: "650px" },
    maxWidth: {
      xs: "100%",
      sm: "650px",
      md: "800px",
      lg: "850px",
      xl: "1250px",
    },
  },
  "@media (min-height: 1250px)": {
    height: { xs: "100%", sm: "100%", md: "500px", lg: "850px", xl: "650px" },
  },
  "@media (max-height: 414px)": { maxWidth: "100%" },
  // background: {
  //   galaxyFold: "purple",
  //   mobile: "silver",
  //   xs: "teal",
  //   sm: "yellow",
  //   md: "red",
  //   lg: "green",
  //   xl: "blue",
  // },

  position: "relative",
};

export const mainCardContainerSx = {
  ...flexBoxSx,
  fontWeight: "bold",
  flexDirection: "column",
  justifyContent: "flex-start",
  // gap: {
  //   galaxyFold: ".75rem",
  //   mobile: ".75rem",
  //   xs: "1.25rem",
  //   sm: "1.25rem",
  //   md: "1.25rem",
  //   lg: "1.5rem",
  // },
  fontFamily: Sx.font.card,
  padding: {
    galaxyFold: ".75rem",
    mobile: ".75rem",
    xs: "1rem",
    sm: "1.25rem",
    md: "1.25rem",
    lg: "1rem",
  },

  "@media (min-height: 1024px)": {
    // gap: "1.5rem",
    padding: "1.5rem",
  },
  "@media (max-height: 414px)": {
    // gap: "1rem",
    padding: { galaxyFold: ".5rem", sm: ".75rem" },
  },
  "@media (max-height: 280px)": { padding: ".35rem .5rem" },
  zIndex: 10,
};
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// Main Text Font Size with @media screens
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
export const mainTextSx = {
  ...flexBoxSx,
  fontFamily: Sx.font.card,
  color: "#fff",
  // ...flexBoxSx,
  // lineHeight: "1.75",
  // textAlign: "center",
  // color: "#fff",
  // textShadow: `-2px 2px 0 #000, 1px -2px 0 #000, -1px 2px 0 #000, 1px 2px 0 #000`,
  // fontSize: {
  //   galaxyFold: "25px",
  //   mobile: "30px",
  //   xs: "38px",
  //   sm: "40px",
  //   md: "42px",
  //   lg: "44px",
  //   xl: "46px",
  // },
  // // max 1024h
  // "@media (min-height: 1024px)": {
  //   fontSize: { sm: "48px", md: "50px", lg: "52px", xl: "54px" },
  //   textAlign: "justify",
  // },

  // // max 1300h
  // "@media (min-height: 1300px)": {
  //   fontSize: "60px",
  // },

  // // max 700w
  // "@media (max-height: 700px)": {
  //   fontSize: {
  //     galaxyFold: "26px",
  //     mobile: "26px",
  //     xs: "30px",
  //     md: "32px",
  //     lg: "36px",
  //   },
  //   textAlign: "justify",
  // },

  // // max 411w
  // "@media (max-Width: 414px)": {
  //   fontSize: { galaxyFold: "28px", mobile: "32px", xs: "34px", md: "36px" },
  //   textAlign: "justify",
  //   textShadow: `-1.5px 1.5px 0 #000, 1px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000`,
  // },

  // // max 414h
  // "@media (max-height: 414px)": {
  //   fontSize: {
  //     galaxyFold: "28px",
  //     mobile: "30px",
  //     xs: "30px",
  //     sm: "30px",
  //     md: "32px",
  //     lg: "34px",
  //   },
  //   textShadow: `-1.5px 1.5px 0 #000, 1px -1.5px 0 #000, -1px 1.5px 0 #000, 1px 1.5px 0 #000`,
  //   lineHeight: "1.35",
  // },

  // // max 360h
  // "@media (max-height: 360px)": {
  //   fontSize: {
  //     galaxyFold: "22px",
  //     mobile: "22px",
  //     xs: "22px",
  //     sm: "24px",
  //     md: "28px",
  //     lg: "30px",
  //   },
  //   textShadow: `-1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`,
  // },
  // // max 340w
  // "@media (max-width: 340px)": {
  //   fontSize: {
  //     galaxyFold: "26px",
  //     mobile: "28px",
  //   },
  //   lineHeight: "1.35",
  //   textShadow: `-1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`,
  // },
};
