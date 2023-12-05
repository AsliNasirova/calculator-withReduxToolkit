import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bolme, cixma, reset, toplama, vurma } from "./CalculatorSlice";

function App() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.result);
  console.log(result);

  const handleOperation = (operator) => {
    const number = { input: parseFloat(input), input2: parseFloat(input2) };
    if (number) {
      switch (operator) {
        case "+":
          dispatch(toplama(number));
          break;
        case "-":
          dispatch(cixma(number));
          break;
        case "*":
          dispatch(vurma(number));
          break;
        case "/":
          dispatch(bolme(number));
          break;
        default:
          break;
      }
    }
    setInput("");
    setInput2("");
  };

  // function reset() {
  //   setInput("");
  //   setInput2("");
  // }

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={() => handleOperation("+")}>+</button>
      <button onClick={() => handleOperation("-")}>-</button>
      <button onClick={() => handleOperation("*")}>*</button>
      <button onClick={() => handleOperation("/")}>/</button>
      <button onClick={() => dispatch(reset())}>C</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
