import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './Button.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Button text="Submit" onClick="Display"/>
  </React.StrictMode>,
)
