import { useRef } from "react";

const CitySelector = ({ updateCity }) => {
  const cityInputRef = useRef();
  // Käyttäjälle input -kenttä ja button kaupungin valintaan
  const sendCityUpdate = () => {
    // 1. Käydään lukemassa input -kentän sisältö
    // Tulostetaan konsoliin
    console.log(cityInputRef.current.value);
    // 2. välitetään se päänäytölle (lift state up)
    updateCity(cityInputRef.current.value);
  };

  return (
    <div>
      <input ref={cityInputRef}></input>
      <button onClick={sendCityUpdate}>Update</button>
    </div>
  );
};

export default CitySelector;
