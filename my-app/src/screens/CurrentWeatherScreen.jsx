import Header from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";
import CitySelector from "../components/CitySelector";
import { useState, useEffect } from "react";
import { testWeatherJSON } from "../sampleData";

const CurrentWeatherScreen = () => {
  const [city, setCity] = useState("Helsinki");
  const [fetchingData, setFetchingData] = useState(false);

  const [weatherData, setWeatherData] = useState({
    description: "Sunny",
    temperature: 9.5,
    windSpeed: 3,
  });

  const updateCity = (newCity) => {
    setCity(newCity);
    fetchWeatherData(newCity);
  };

  const fetchWeatherData = async (city) => {
    // 2 sekunnin viive ja parsitaan testidata
    setFetchingData(true);
    // Viive
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFetchingData(false);
    // Parsitaan data
  };

  useEffect(() => {
    fetchWeatherData("Helsinki");
  }, []);

  // Conditional rendering.. if/else
  if (fetchingData) {
    return <Header title="Haetaan säätietoja" />;
  }
  return (
    <div>
      <Header title={city}></Header>
      <WeatherDisplay
        description="Sunny"
        temperature={8}
        windSpeed={3}
      ></WeatherDisplay>
      <CitySelector updateCity={updateCity}></CitySelector>
    </div>
  );
};

export default CurrentWeatherScreen;
