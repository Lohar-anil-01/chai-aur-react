import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter((counter) => Math.min(20, counter + 1));
    console.log(counter);
  };

  const decreaseValue = () => {
    setCounter((counter) => Math.max(0, counter - 1));
    console.log(counter);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button> <br /> <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <footer>{counter}</footer>
    </>
  );
}

export default App;
