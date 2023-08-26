import React from 'react'
import ReactDOM from 'react-dom/client'
import Person from './Person.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person  age="21" name="Sonu" />
  </React.StrictMode>,
)
