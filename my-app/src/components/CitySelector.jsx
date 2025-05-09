import { useRef } from "react";
import { TextField, Button, Box } from "@mui/material";

const CitySelector = ({ updateCity }) => {
  const cityInputRef = useRef();
  // Käyttäjälle input -kenttä ja button kaupungin valintaan
  const sendCityUpdate = () => {
    const value = cityInputRef.current.value.trim();
    // Tarkastetaan tekstin oikeellisuus, esim. sisältää @ ja numeron
    /*const isValid = /@/.test(value) && /\d/.test(value);
    if (!isValid) {
      //virheilmoitus
      return;
    }*/
    // 1. Käydään lukemassa input -kentän sisältö
    // Tulostetaan konsoliin
    console.log(value);
    // 2. välitetään se päänäytölle (lift state up)
    updateCity(value);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, m: 2 }}>
      <TextField variant="outlined" inputRef={cityInputRef}></TextField>
      <Button variant="contained" onClick={sendCityUpdate}>
        Update
      </Button>
    </Box>
  );
};

export default CitySelector;
