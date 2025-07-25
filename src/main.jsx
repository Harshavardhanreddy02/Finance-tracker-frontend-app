import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <StrictMode >
    <App />
  </StrictMode>
   </Provider>
  </BrowserRouter>
 
)
