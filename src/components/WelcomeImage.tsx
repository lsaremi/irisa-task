import { Box } from "@mui/material";

const WelcomeImage: React.FC = () => (
  <Box
    component="img"
    src={`${process.env.PUBLIC_URL}/assets/images/welcome-image.png`}
    alt="welcome-image"
  />
);

export default WelcomeImage;
