import Person from "./components/Person";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Post from "./components/Post";
import CurrentWeatherScreen from "./screens/CurrentWeatherScreen";
import WeatherForecastScreen from "./screens/WeatherForecastScreen";
// React -komponentti "App". Komponentti palauttaa aina käyttöliittymäelementin.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <Button component={Link} to="/">
          Current
        </Button>
        <Button component={Link} to="/current">
          Forecast
        </Button>
      </Box>
      <Routes>
        <Route
          path="/current"
          element={<CurrentWeatherScreen></CurrentWeatherScreen>}
        />
        <Route
          path="/"
          element={<WeatherForecastScreen></WeatherForecastScreen>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
