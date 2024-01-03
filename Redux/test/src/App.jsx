import { useState } from "react"

function App() {

  const [num, setNum]=useState(0)
  function handlenum(){
    let x=10
    setNum(x)
    let y=x+5
    setNum(y)
  }
  return (
    <>
    <button onClick={handlenum}>{num}</button>
    </>
  )
}

export default App
