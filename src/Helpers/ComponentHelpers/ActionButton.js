import React from "react";
import { Paper, Box } from "@mui/material";
import { flexBoxSx } from "../SXstyles";

function ActionButton({ handleClick }) {
  return (
    <Paper
      onClick={handleClick}
      sx={{
        height: "145.5px",
        width: "150px",
        backgroundColor: "black",
        borderRadius: "100%",
        textAlign: "center",
        margin: "auto",
        position: "relative",
        paddingTop: "7.5px",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          display: "inline-block",
          height: "67.5px",
          width: "67.5px",
          background: "white",
          borderTopLeftRadius: "100%",
          borderTopRightRadius: "3.75px",
          borderBottomLeftRadius: "3.75px",
          margin: "0 1.875px .5px 0",
        }}
      />
      <Paper
        elevation={5}
        sx={{
          display: "inline-block",
          height: "67.5px",
          width: "67.5px",
          background: "#981010",
          borderTopRightRadius: "100%",
          borderTopLeftRadius: "3.75px",
          borderBottomRightRadius: "3.75px",
          margin: "0 0 .5px 1.875px",
        }}
      />
      <Paper
        elevation={5}
        sx={{
          display: "inline-block",
          height: "67.5px",
          width: "67.5px",
          background: "#981010",
          borderTopRightRadius: "3.75px",
          borderTopLeftRadius: "3.75px",
          borderBottomLeftRadius: "100%",
          margin: ".5px 1.875px 0 0",
        }}
      />
      <Paper
        elevation={5}
        sx={{
          display: "inline-block",
          height: "67.5px",
          width: "67.5px",
          background: "white",
          opacity: ".7",
          borderTopRightRadius: "3.75px",
          borderTopLeftRadius: "3.75px",
          borderBottomRightRadius: "100%",
          margin: ".5px 0 0 1.875px",
        }}
      />
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "auto",
          borderRadius: "100%",
          border: "3.75px solid black",
          position: "absolute",
          top: "15%",
          left: "15%",
          right: "15%",
          bottom: "15%",
          fontSize: "2rem",
          fontWeight: "bold",
          backgroundColor: "#d4d4d4",
          "&:hover": {
            backgroundColor: "#981010",
            color: "#fff",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
          transition: "transform ease-in .5s",

          //   marginTop: "-285px",
          //   marginLeft: "102px",
        }}
      >
        FAIL
      </Paper>
    </Paper>
  );
}

export default ActionButton;

// /*Display In-line Block*/

// .dib {
//     display: inline-block;
// }

// /*Game UI*/

// .simon {
//     font-family: Bungee;
//     font-size: 30px;
//     margin-top: 25px;
//     text-transform: uppercase;
// }

// #reg {
//     font-size: 25px;
// }

// .controls {
//     height: 180px;
//     width: 180px;
//     border-radius: 100%;
//     background-color: #d4d4d4;
//     border: 10px solid black;
//     position: relative;
//     margin-top: -285px;
//     margin-left: 102px;
// }

// .counter {
//     background-color: #333333;
//     font-family: Tahoma;
//     border-radius: 5px;
//     color: #f45c42;
//     height: 35px;
//     width: 35px;
//     display: inline-block;
//     margin: 10px;
//     line-height: 1.7em;
//     font-size: 20px;
// }

// .start-button {
//     background-color: #af453a;
//     color: white;
//     border-radius: 10px;
//     height: 25px;
//     width: 50px;
//     display: inline-block;
// }

// .strict-button {
//     background-color: #c6c561;
//     color: white;
//     border-radius: 10px;
//     height: 25px;
//     width: 50px;
// }

// .strict-light {
//     height: 5px;
//     width: 5px;
//     border-radius: 50%;
//     background-color: black;
//     border: 1px solid black;
//     display: inline-block;
// }

// .power-button {
//     font-family: Bungee;
//     background-color: #98aeb7;
//     height: 20px;
//     width: 60px;
//     border-radius: 4px;
// }

// .power-light {
//     height: 5px;
//     width: 5px;
//     border-radius: 50%;
//     background-color: black;
//     border: 1px solid black;
//     display: inline-block;
// }

// /*Colored Buttons*/

// .green {
//     height: 180px;
//     width: 180px;
//     background: #278438;
//     border-top-left-radius: 100%;
//     border-top-right-radius: 10px;
//     border-bottom-left-radius: 10px;
// }

// .red {
//     height: 180px;
//     width: 180px;
//     background: #842727;
//     border-top-right-radius: 100%;
//     border-top-left-radius: 10px;
//     border-bottom-right-radius: 10px;
// }

// .yellow {
//     height: 180px;
//     width: 180px;
//     background: #847e27;
//     border-bottom-left-radius: 100%;
//     border-top-left-radius: 10px;
//     border-bottom-right-radius: 10px;
// }

// .blue {
//     height: 180px;
//     width: 180px;
//     background: #275d84;
//     border-bottom-right-radius: 100%;
//     border-top-right-radius: 10px;
//     border-bottom-left-radius: 10px;
// }

// /*Buttons UI Classes*/

// .green.brighten {
//     background-color: white;
//     box-shadow: inset 30px 30px 100px #42f445;
// }

// .red.brighten {
//     background-color: white;
//     box-shadow: inset -30px 30px 100px #f44242;
// }

// .yellow.brighten {
//     background-color: white;
//     box-shadow: inset 30px -30px 100px #f4f142;
// }

// .blue.brighten {
//     background-color: white;
//     box-shadow: inset -30px -30px 100px #42a4f4;
// }

// /* Buttons Active Inactive */

// .game-button {
//     pointer-events: none;
// }

// .game-button.active {
//     pointer-events: auto;
// }
