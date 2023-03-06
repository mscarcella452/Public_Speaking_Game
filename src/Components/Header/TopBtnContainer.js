import React, { useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import { btnSx, HeaderSx, Sx } from "../../Styles/SXstyles";
import { SmallBtnFlipContainerOverlay } from "../Helpers/FlipContainer";
import { TopBtnFabric } from "../Helpers/BtnFabric";
import {
  gameContext,
  gameDispatchContext,
} from "../../Context/GameStatusContext";
import { timerContext, timerDispatchContext } from "../../Context/TimerContext";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  buttonContext,
  buttonDispatchContext,
} from "../../Context/ButtonContext";

export default function TopBtnContainer({ showTopic }) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timer = useContext(timerContext);
  const timerDispatch = useContext(timerDispatchContext);
  const btn = useContext(buttonContext);
  const btnDispatch = useContext(buttonDispatchContext);

  const [rulesBtnIcon, setRulesBtnIcon] = useState(
    <HelpCenterIcon sx={topButtonIconSx} />
  );

  // const toggleTimer = () => {
  //   timer.On
  //     ? timerDispatch({ type: "TOGGLE_TIMER" })
  //     : setTimeout(() => {
  //         timerDispatch({ type: "TOGGLE_TIMER" });
  //       }, 1200);
  // };

  const toggleRulesBtnIcon = () => {
    btnDispatch({ type: "TOGGLE_RULES_BTN" });
    setTimeout(() => {
      btnDispatch({ type: "TOGGLE_RULES_BTN" });
      game.rules
        ? setRulesBtnIcon(<HelpCenterIcon sx={topButtonIconSx} />)
        : setRulesBtnIcon(<KeyboardReturnIcon sx={topButtonIconSx} />);
    }, 1200);
  };

  const toggleRules = () => {
    toggleRulesBtnIcon();
    // if game is off-------------------
    if (game.status === "off") {
      // if game is off && rules are off
      if (!game.rules) {
        btnDispatch({ type: "TOGGLE_PLAY_BTN" });
        setTimeout(() => {
          gameDispatch({ type: "TOGGLE_RULES" });
          gameDispatch({ type: "LOAD" });
        }, 1200);
        // if game is off && rules are on
      } else {
        gameDispatch({ type: "LOAD" });
        setTimeout(() => {
          gameDispatch({ type: "TOGGLE_RULES" });
          btnDispatch({ type: "TOGGLE_PLAY_BTN" });
        }, 1200);
      }
      // if game is on-----------------------
    } else {
      game.status === "speech" && timerDispatch({ type: "TOGGLE_TIMER" });
      btnDispatch({ type: "TOGGLE_QUIT_BTN" });
      gameDispatch({ type: "LOAD" });
      setTimeout(() => {
        gameDispatch({ type: "TOGGLE_RULES" });
        gameDispatch({ type: "LOAD" });
      }, 1200);
    }
  };

  const quitGame = () => {
    btnDispatch({ type: "TOGGLE_RULES_BTN" });
    btnDispatch({ type: "TOGGLE_QUIT_BTN" });
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "GAME_OFF" });
      timerDispatch({ type: "RESET" });
    }, 1200);
  };

  const endIntermission = () => {
    gameDispatch({ type: "LOAD" });
    btnDispatch({ type: "TOGGLE_QUIT_BTN" });
    setTimeout(() => {
      timerDispatch({ type: "RESET" });
      showTopic();
      btnDispatch({ type: "TOGGLE_TOP_BTNS" });
      // btnDispatch({ type: "THIRD_BTN_TITLE", payload: "Next" });
    }, 1200);
  };
  const handleQuit = () => {
    game.status === "intermission" ? endIntermission() : quitGame();
  };

  return (
    <Box sx={HeaderSx}>
      <SmallBtnFlipContainerOverlay active={!game.rules && btn.quitBtnActive}>
        <TopBtnFabric onClick={handleQuit}>
          {game.status === "intermission" ? (
            <ChevronLeftIcon sx={topButtonIconSx} />
          ) : (
            <DisabledByDefaultIcon sx={topButtonIconSx} />
          )}
          {/* <Box sx={topBtnSx}>X</Box> */}
        </TopBtnFabric>
        {/* <Button
          onClick={handleQuit}
          sx={{ ...btnSx, color: Sx.color.secondary }}
        >
          <CancelPresentationIcon sx={topButtonIconSx} />
        </Button> */}
      </SmallBtnFlipContainerOverlay>
      <SmallBtnFlipContainerOverlay active={btn.rulesBtnActive}>
        <TopBtnFabric onClick={toggleRules}>
          {rulesBtnIcon}
          {/* <Box sx={topBtnSx}>?</Box> */}
        </TopBtnFabric>
        {/* <Button
          onClick={toggleRules}
          sx={{ ...btnSx, color: Sx.color.secondary }}
        >
          {rulesBtnIcon}
        </Button> */}
      </SmallBtnFlipContainerOverlay>
    </Box>
  );
}

const topButtonIconSx = {
  "@media (min-height: 1024px)": { fontSize: "40px" },
};
