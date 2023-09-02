import { useState } from "react"
import "./App.css"
let z=0
function Counter(){
      
    const [x, setX]=useState(0)
    const [y, setY]=useState(6)
    return (
        <>
        Count X: {x}
        <button className="button" onClick={()=> setX(x+1)}>Inc</button>
        <button style={{backgroundColor:"black", color:"#fff"}} onClick={()=> setX(x-1)}>Dec</button>
        <br />

        Count y: {y}
        <button onClick={()=> setY(y+1)}>Inc</button>
        <button onClick={()=> setY(y-1)}>Dec</button>
        <br />
        
        Count Z: {z}
        <button onClick={()=> z+=1}>Inc</button>
        <button onClick={()=> z-=1}>Dec</button> 
        </>
    )
}
export default Counter