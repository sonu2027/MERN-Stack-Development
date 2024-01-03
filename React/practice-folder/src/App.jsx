import { useState } from "react"

function App() {
  const [array, setArray]=useState([1,2,"momdal"])
  function handleButton(){
    setArray([...array, "sonu"])
    console.log("array1", array);
    setArray([...array, "sonu"])
    console.log("array2", array);
  }
  console.log("array3", array);
  return (
    <>
     <button onClick={handleButton}>Button</button>
     {array.map((e,i)=><h3 key={i}>{e}</h3>)}
    </>
  )
}

export default App
