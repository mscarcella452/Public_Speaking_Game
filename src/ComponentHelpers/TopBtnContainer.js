import React, { useState, useEffect, useContext } from "react";
import { useToggle } from "../Helpers/CustomHooks";
import { Box, Button } from "@mui/material";
import { btnSx, HeaderSx, smallBtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import { timerDispatchContext } from "../Context/TimerContext";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { buttonContext, buttonDispatchContext } from "../Context/ButtonContext";

export default function TopBtnContainer() {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const btn = useContext(buttonContext);
  const btnDispatch = useContext(buttonDispatchContext);

  const [rulesBtnIcon, setRulesBtnIcon] = useState(<HelpCenterIcon />);

  const toggleRulesBtnIcon = () => {
    btnDispatch({ type: "TOGGLE_RULES_BTN" });
    setTimeout(() => {
      btnDispatch({ type: "TOGGLE_RULES_BTN" });
      game.rules
        ? setRulesBtnIcon(<HelpCenterIcon />)
        : setRulesBtnIcon(<KeyboardReturnIcon />);
    }, 1200);
  };

  const toggleRules = () => {
    toggleRulesBtnIcon();
    // if game is off-------------------
    if (game.status === "off") {
      // if game is off && rules are off
      if (!game.rules) {
        gameDispatch({ type: "TOGGLE_RULES" });
        setTimeout(() => {
          gameDispatch({ type: "LOAD" });
        }, 1200);
        // if game is off && rules are on
      } else {
        gameDispatch({ type: "LOAD" });
        setTimeout(() => {
          gameDispatch({ type: "TOGGLE_RULES" });
        }, 1200);
      }
      // if game is on-----------------------
    } else {
      btnDispatch({ type: "TOGGLE_QUIT_BTN" });
      gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        gameDispatch({ type: "TOGGLE_RULES" });
        gameDispatch({ type: "LOAD" });
      }, 1200);
    }
  };

  const handleQuit = () => {
    btnDispatch({ type: "TOGGLE_RULES_BTN" });
    btnDispatch({ type: "TOGGLE_QUIT_BTN" });
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      btnDispatch({ type: "THIRD_BTN_TITLE", payload: "Play" });
    }, 500);
    setTimeout(() => {
      gameDispatch({ type: "GAME_OFF" });
      timerDispatch({ type: "RESET" });
    }, 1200);
  };

  return (
    <Box sx={HeaderSx}>
      <FlipContainer
        active={!game.rules && btn.quitBtnActive}
        containerSx={smallBtnFlipContainerSx}
        overlay={true}
      >
        <Button onClick={handleQuit} sx={btnSx}>
          <CancelPresentationIcon />
        </Button>
      </FlipContainer>
      <FlipContainer
        active={btn.rulesBtnActive}
        containerSx={smallBtnFlipContainerSx}
        overlay={true}
      >
        <Button onClick={toggleRules} sx={btnSx}>
          {rulesBtnIcon}
        </Button>
      </FlipContainer>
    </Box>
  );
}

const HeaderSx2 = {
  height: {
    xs: "50px",
    sm: "50px",
    md: "50px",
    lg: "50px",
    xl: "50px",
  },
};

const smallBtnWidthSx = {
  xs: "55px",
  sm: "55px",
  md: "55px",
  lg: "55px",
  xl: "55px",
};
