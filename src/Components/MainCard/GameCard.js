import { Box } from "@mui/material";
import { mainCardContainerSx } from "../../Styles/SXstyles";
import TopCardMargin from "../Helpers/TopCardMargin";
import CardContent from "../Helpers/CardContent";
import { ColorOverlay, FabricOverlay } from "../Helpers/Overlays";

function GameCard({ timer, label, mainContent, backgroundColor }) {
  return (
    <Box
      sx={{
        ...mainCardContainerSx,
        backgroundColor: backgroundColor,
      }}
    >
      <ColorOverlay />
      <TopCardMargin label={label} timer={timer} />
      <CardContent>{mainContent}</CardContent>
      <FabricOverlay />
    </Box>
  );
}

export default GameCard;
