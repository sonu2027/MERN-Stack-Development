import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Image from './Image.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Image src="https://media.post.rvohealth.io/wp-content/uploads/2020/08/full-moon-night-landscape-732x549-thumbnail-1-732x549.jpg"/>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg"/>
  </React.StrictMode>,
)
