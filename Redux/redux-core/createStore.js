import { bindActionCreators, createStore } from "redux";

function todoReducer(state, action) {
  if (action.type == "add_todo") {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: state.length == 0 ? 1 : state[state.length - 1].id + 2,
      },
    ];
  } else if (action.type == "delete_todo") {
    const todo = action.payload.todo;
    return state.filter((t) => t.id != todo.id);
  } else if (action.type == "edit_todo") {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    return state.map((e) => {
      if (e == todo) {
        t.text = todoText;
      }
      return t;
    });
  }
  return state;
}
const { dispatch, subscribe, getState, replaceReducer } = createStore(
  todoReducer,
  []
);
const addTodo=(todoText)=>({ type: "add_todo", payload: { todoText} })
subscribe(() => console.log(getState()));
// dispatch({ type: "add_todo", payload: { todoText: "todo1" } });
// dispatch(addTodo("my name"));
// dispatch(addTodo("your"));
const actions=bindActionCreators({addTodo}, dispatch)
actions.addTodo("my name")
actions.addTodo("your")
