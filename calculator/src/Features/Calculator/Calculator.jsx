import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bolme, cixma, reset, toplama, vurma } from './CalculatorSlice';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.result);

  const handleOperation = (operator) => {
    const number = parseFloat(input);
    if (number) {
      switch (operator) {
        case '+':
          dispatch(toplama(number));
          break;
        case '-':
          dispatch(cixma(number));
          break;
        case '*':
          dispatch(vurma(number));
          break;
        case '/':
          dispatch(bolme(number));
          break;
        default:
          break;
      }
    }
    setInput('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleOperation('*')}>*</button>
      <button onClick={() => handleOperation('/')}>/</button>
      <button onClick={() => dispatch(reset())}>C</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;