import { useContext } from "react"
import TodoContext from "../context/TodoContext"
import Todo from "../Todo/Todo"
function TodoList() {
    const { list, setList } = useContext(TodoContext)
    return (
        <div>
            {list.length > 0 && list.map((todo) => <Todo changeFinished={(isFinished) => {
                const updatedList = list.map(t => {
                    if (t.id == todo.id) {
                        todo.finished = isFinished
                    }
                    return t
                })
                setList(updatedList)
            }} key={todo.id} id={todo.id} isFinished={todo.finished} todoData={todo.todoData} />)}
        </div>
    )
}
export default TodoList