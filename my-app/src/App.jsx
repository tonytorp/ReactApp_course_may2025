import Person from "./components/Person";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Post from "./components/Post";
import CurrentWeatherScreen from "./screens/CurrentWeatherScreen";
// React -komponentti "App". Komponentti palauttaa aina käyttöliittymäelementin.

const App = () => {
  // Miten rakennan React -sovelluksen?
  // React -komponentti palauttaa yhden juurielementin
  return <CurrentWeatherScreen />;
};

export default App;
