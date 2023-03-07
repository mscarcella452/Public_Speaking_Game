import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { footerSx, flexBoxSx, BtnFlipContainerSx } from "../../Styles/SXstyles";
import { BtnFlipContainer } from "../Helpers/FlipContainer";
import { gameContext } from "../../Context/GameStatusContext";
import { buttonContext } from "../../Context/ButtonContext";

export default function Footer({ active }) {
  const game = useContext(gameContext);
  const btn = useContext(buttonContext);

  return (
    <Box sx={footerSx}>
      <BtnFlipContainer
        active={active.bottom.leftBtn}
        // active={game.flip && (game.status === "topic" || game.rules)}
      />
      <BtnFlipContainer
        active={active.bottom.middleBtn}
        // active={game.flip && (game.status === "speech" || game.rules)}
      />
      <BtnFlipContainer active={active.bottom.rightBtn} />
    </Box>
  );
}
