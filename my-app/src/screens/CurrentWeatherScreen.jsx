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
    const urlBase = "https://api.openweathermap.org/data/2.5/weather?q=";
    const urlParameters =
      "&units=metric&appid=6c433438776b5be4ac86001dc88de74d";
    // 2 sekunnin viive ja parsitaan testidata
    setFetchingData(true);
    // Viive
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const response = await fetch(urlBase + city + urlParameters);
      const weatherJSON = await response.json();
      setFetchingData(false);
      setCity(weatherJSON.name);
      // Parsitaan data, päivitetään json -tilatieto
      setWeatherData({
        description: weatherJSON.weather[0].main,
        temperature: weatherJSON.main.temp,
        windSpeed: weatherJSON.wind.speed,
      });
    } catch (e) {
      console.log(error);
    }
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
        description={weatherData.description}
        temperature={weatherData.temperature}
        windSpeed={weatherData.windSpeed}
      ></WeatherDisplay>
      <CitySelector updateCity={updateCity}></CitySelector>
    </div>
  );
};

export default CurrentWeatherScreen;
