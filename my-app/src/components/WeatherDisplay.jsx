const WeatherDisplay = ({ description, temperature, windSpeed }) => {
  return (
    <div>
      <h4>Current conditions</h4>
      <h5>{description}</h5>
      <h5>{temperature}C</h5>
      <h5>{windSpeed}m/s</h5>
    </div>
  );
};

export default WeatherDisplay;
