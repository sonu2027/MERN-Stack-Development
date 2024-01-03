import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import ListItems from './ListItems'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
   {/* <ListItems/> */}
  </BrowserRouter>
)
