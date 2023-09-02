import { useState } from "react"
import "./App.css"
function App() {
  const [result, setResult] = useState(0);

  function incResult() {
    setResult(result + 1);
  };

  function decResult() {
    setResult(result - 1);
  };
  return (
    <div id="parent-container">
      <h1 id="result">{result}</h1>
      <div id="container">
      <button onClick={incResult} className="button ">Increment</button>
      <button onClick={decResult} className="button" >Decrement</button>
      </div>
    </div>
  )
}

export default App
