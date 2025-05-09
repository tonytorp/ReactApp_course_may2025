import { testPersonArray } from "../sampleData";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

// Modern JS React Array -operaatiot
// map ja filter
// spread -operator (liittyy taulukoihin ja objekteihin)

const WeatherForecastScreen = () => {
  // person arrayn tulee olla tämän näytön statena
  const [personArray, setPersonArray] = useState(testPersonArray);
  const mapPersonsToTableRow = personArray.map((person) => (
    <TableRow key={person.id}>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.age}</TableCell>
      <TableCell>
        <Button
          onClick={() => {
            const updatedArray = personArray.filter((p) => p.id !== person.id);
            setPersonArray(updatedArray);
          }}
        >
          Poista
        </Button>
      </TableCell>
    </TableRow>
  ));

  const addPerson = () => {
    // Lisätään uusi henkilö ja päivitetään tila
    const newPerson = { id: 88, name: "Antti", age: 45 };
    // Spread -operaattori
    const updatedPersons = [...personArray, newPerson];
    setPersonArray(updatedPersons);
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ m: 2 }}>
        <Typography variant="h6">Persons</Typography>
        <Table>
          <TableBody>{mapPersonsToTableRow}</TableBody>
        </Table>
      </TableContainer>
      <Button onClick={addPerson} variant="outlined">
        Lisää henkilö
      </Button>
    </div>
  );
};

export default WeatherForecastScreen;
