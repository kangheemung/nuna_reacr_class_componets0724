import React, { useState } from "react";
import './App.css';

function App() {
  let counter = 0;
nst [counter2, setCounter2] = useState(0);

  const increment = () => {
    counter = counter + 1; // This line won't update the state or re-render the component
    setCounter2(counter2 + 1);
    console.log("counter는 ", counter, "counter2는 ", counter2);
  };
//유저가 버튼을 클릭한다.
//2.counter+1 해서 1이된다
//함수를 호출을 한다
//console.log가 실행이 되는데 변수 값은 1로 보이고 state 값은 다시 0으로 초기화가 된다
//함수끝
// App 다시 rerender
//let counter=0 을 거치면서 값은 다시 0으로 초기화가 된다.
//state값은 업데이트가 되면서 다시 render를 한다.


  return (
    <div>
      <p>Counter: {counter2}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
