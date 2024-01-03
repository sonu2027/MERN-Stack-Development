import { useState } from "react"

function AddTodo({updateList}) {
    const [inputText, setInputText]=useState("")
    return (
        <div>
            <input value={inputText} onChange={(e)=>setInputText(e.target.value)} type="text" placeholder="Add your next todo..." />
            <button onClick={()=>{
                updateList(inputText)
                setInputText("")
                }}>Add</button>
        </div>
    )
}
export default AddTodo