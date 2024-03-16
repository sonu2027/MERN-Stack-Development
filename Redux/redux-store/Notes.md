Getting started with Redux-toolkit
1. setup your react project
2. Install redux: npm i @reduxjs/toolkit and npm i react-redux

// configureStore()
3. create a file store.js
   
   import {configureStore} from '@reduxjs/toolkit';
   import todoReducer from '../features/todo/todoSlice';

   export const store = configureStore({
    reducer: todoReducer
   })

// createReducer()
9. create a todoSlice.js file and writre it 
   
   // craeteSlice to make reducer and reducer gives function to perform action
   // nanonid generate unique no every time which used for id
   import {createSlice, nanoid } from '@reduxjs/toolkit';

   // Initial state of store
   const initialState = {
       todos: [{id: 1, text: "Hello world"}]
   }

  // make a slice 
  // createSlice make a slice
  export const todoSlice = createSlice({
    // slices have a name and initialstate and reducer(functioality)
    name: 'todo',
    initialState,
    // Reducer havre a property and function
    // by default state and action access we have
    // dispatch send the value and we will access with action.payload
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

// export individual reducer becoz it will need on component
export const {addTodo, removeTodo} = todoSlice.actions

// export all the reducer it is needed on store because store only update the value which reducer is their on craeteSlice
export default todoSlice.reducer
   
Notes: useReducer(), useDispatch(), useSelector()