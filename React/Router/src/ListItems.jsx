import { useState } from "react";
function ListItems(){
    const [li, setLi]=useState([1,2,3])
    function handleArray(){
        setLi([...li, "sonu"])
    }
    return (
        <ul>
            {li.map((l)=> <li>{l}</li>)}
            <button onClick={handleArray}>Button</button>
        </ul>
    )
}
export default ListItems