import { flexBoxSx, Sx, fabricOverlaySx } from "./SXstyles";

const borderRadius = {
  main: { xs: "5px", sm: "5px", md: "5px", lg: "5px", xl: "5px" },
  btn: { xs: "5px", sm: "5px", md: "5px", lg: "5px", xl: "5px" },
  smBtn: { xs: "3px", sm: "3px", md: "3px", lg: "3px", xl: "3px" },
};

const containerSx = {
  ...flexBoxSx,
  padding: { xs: "3px", sm: "3px", md: "3px", lg: "3px" },
  boxShadow:
    "-1px -1px 0 #000 inset, 1px -1px 0 #000 inset, -1px 1px 0 #000 inset, 1px 1px 0 #000 inset",
  // boxShadow: "0px 0px 3px .5px #333 inset",
  position: "relative",
  background: "rgb(15, 15, 15)",
};

const flipBoxInnerSx = {
  width: "100%",
  height: "100%",
  transition: "transform 1.5s",
  transformStyle: "preserve-3d",
  position: "relative",
  backgroundColor: Sx.color.primary,
  boxShadow:
    "-1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1.5px 0 #333",
};

const frontFlipSx = {
  ...flexBoxSx,
  position: "absolute",
  backfaceVisibility: "hidden",
  overflow: "hidden",
  padding: "1.5rem",
};

const backFlipSx = {
  ...frontFlipSx,
  padding: 0,
  backgroundColor: "#fff",
  transform: "rotateX(180deg)",
  position: "relative",
  zIndex: 20,
};

export const flipContainerSx = {
  // container------------------------------
  container: {
    main: {
      ...containerSx,
      border: "1px solid #333",
      borderRadius: borderRadius.main,
      maxHeight: {
        xs: "400px",
        sm: "350px",
        md: "100%",
        lg: "100%",
        xl: "100%",
      },
      height: {
        xs: "100%",
        sm: "100%",
        md: "200px",
        lg: "275px",
        xl: "425px",
      },
      width: {
        xs: "100%",
        sm: "100%",
        md: "450px",
        lg: "550px",
        xl: "900px",
      },
    },
    btn: {
      ...containerSx,
      width: {
        xs: "33%",
        sm: "33%",
        md: "160px",
        lg: "160px",
        xl: "160px",
      },
      border: ".25px solid #333",
      borderRadius: borderRadius.btn,
    },
    smBtn: {
      ...containerSx,
      width: {
        xs: "50px",
        sm: "50px",
        md: "50px",
        lg: "50px",
        xl: "50px",
      },
      border: ".25px solid #333",
      borderRadius: borderRadius.smBtn,
    },
  },
  // inner------------------------------
  inner: {
    default: {
      main: { ...flipBoxInnerSx, borderRadius: borderRadius.main },
      btn: { ...flipBoxInnerSx, borderRadius: borderRadius.btn },
      smBtn: { ...flipBoxInnerSx, borderRadius: borderRadius.smBtn },
    },
    overlay: {
      main: {
        ...flipBoxInnerSx,
        borderRadius: borderRadius.main,
        background: "transparent",
      },
      btn: {
        ...flipBoxInnerSx,
        borderRadius: borderRadius.btn,
        background: "transparent",
      },
      smBtn: {
        ...flipBoxInnerSx,
        borderRadius: borderRadius.smBtn,
        background: "transparent",
      },
    },
  },
  // front------------------------------
  front: {
    main: {
      ...frontFlipSx,
      borderRadius: borderRadius.main,
    },
    btn: {
      ...frontFlipSx,
      borderRadius: borderRadius.btn,
    },
    smBtn: {
      ...frontFlipSx,
      borderRadius: borderRadius.maismBtnn,
    },
  },
  // back------------------------------
  back: {
    main: {
      ...backFlipSx,
      borderRadius: borderRadius.main,
    },
    btn: {
      ...backFlipSx,
      borderRadius: borderRadius.btn,
    },
    smBtn: {
      ...backFlipSx,
      borderRadius: borderRadius.smBtn,
    },
  },
  // fabric------------------------------
  fabric: {
    main: {
      ...fabricOverlaySx,
      borderRadius: borderRadius.main,
      opacity: 0.3,
    },
    btn: {
      ...fabricOverlaySx,
      borderRadius: borderRadius.btn,
      opacity: 0.5,
    },
    smBtn: {
      ...fabricOverlaySx,
      borderRadius: borderRadius.smBtn,
      opacity: 0.3,
    },
  },
};
