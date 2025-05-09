import { useState } from "react";

const Counter = () => {
  // Counter on reactin tilamuuttuja (state)
  // setCounterilla päivitetään tila ja aiheutetaan re-render
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // increment -nappulan käsittelijä
    setCounter(counter + 1);
    console.log("Counter: " + counter);
  };
  const decrement = () => {
    // decrement -nappulan käsittelijä
    setCounter(counter - 1);
    console.log("Counter: " + counter);
  };
  // Laskuri ja kaksi nappulaa + ja -
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Counter;
