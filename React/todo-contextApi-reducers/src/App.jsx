import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"
import { useState } from "react"
import TodoContext from "./components/context/TodoContext"

function App() {

  const [list, setList] = useState([
    { id: 1, todoData: "todo 1", finished:false },
    { id: 2, todoData: "todo 2", finished:false }
  ])

  return (
    <TodoContext.Provider value={{list, setList}}>
      <AddTodo updateList={(inputText)=>setList([...list, {id:list.length+1, finished:false, todoData:inputText}])} />
      <TodoList />
    </ TodoContext.Provider>
  )
}

export default App
