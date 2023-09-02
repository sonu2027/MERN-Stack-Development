import { useState } from "react"

function App() {
  // let x=[2, 3, 4, 5, 6]
  console.log("Executing")
  const [x, setX] = useState([2, 3, 4, 5, 6])
  // x.push("999")
  return (
    <>
      {x}
      <br />
      {x.map((el, index) =>
        <h3 key={index}>{el}</h3>
      )}
      Count X:
      <button onClick={()=>setX([3,4,5])}>Inc</button>
      <button onClick={()=>setX([9,2,3,9])}>dec</button>
      <footer>Let's end</footer>
    </>
  )
}
export default App