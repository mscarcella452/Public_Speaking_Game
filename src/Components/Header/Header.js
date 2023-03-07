import { Box } from "@mui/material";
import { HeaderSx } from "../../Styles/SXstyles";
import { SmallBtnFlipContainer } from "../Helpers/FlipContainer";

export default function Header({ active }) {
  return (
    <Box sx={HeaderSx}>
      <SmallBtnFlipContainer active={active.top.quitBtn} />

      <SmallBtnFlipContainer active={active.top.rulesBtn} />
    </Box>
  );
}
