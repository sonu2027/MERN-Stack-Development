import { useReducer } from "react"
function App() {

  const reducer = (state, action) => {
    let task = action.payload.task
    let taskName = action.payload.taskName
    if (action.type == "Inc") {
      return { count: state.count + 1, task: task, taskName: taskName }
    }
    return { count: state.count - 1, task: task, taskName: taskName }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, task: 1, taskName: "Sonu" })
  return (
    <>
      <div>{state.task}</div>
      <div>{state.taskName}</div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "Inc", payload: { task: 8, taskName: "bipin" } })}>Inc</button>
      <button onClick={() => dispatch({ type: "Dec", payload: { task: 12, taskName: "kumkum" } })} >Dec</button>
    </>
  )
}

export default App

