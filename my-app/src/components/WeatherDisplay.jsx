import { Card, CardContent, Typography } from "@mui/material";
import WBSunnyIcon from "@mui/icons-material/WbSunny";

const WeatherDisplay = ({ description, temperature, windSpeed }) => {
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h5">Current conditions</Typography>
        <Typography variant="h6">{description}</Typography>
        <Typography variant="h6">{temperature}C</Typography>
        <Typography variant="h6">{windSpeed}m/s</Typography>
        <WBSunnyIcon fontSize="large" color="warning"></WBSunnyIcon>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
