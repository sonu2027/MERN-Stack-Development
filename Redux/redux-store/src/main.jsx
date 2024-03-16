import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import provider
import { Provider } from 'react-redux'

// import store.js file
// import {store} from './app/store' or
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)