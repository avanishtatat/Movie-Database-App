import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import SearchProvider from './context/searchContext'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
