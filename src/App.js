import React, { useState } from "react";
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);

  const increment = () => {
    counter = counter + 1; // This line won't update the state or re-render the component
    setCounter2(counter2 + 1);
    console.log("counter는 ", counter, "counter2는 ", counter2);
  };

  return (
    <div>
      <p>Counter: {counter2}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
