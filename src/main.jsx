import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from "@reduxjs/toolkit"
import { Provider }from "react-redux"
import  userReducer  from './features/User.js'
import { GoogleOAuthProvider } from '@react-oauth/google'

const store = configureStore({
  reducer : {
    user :userReducer,
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoogleOAuthProvider clientId="625995143189-2q1uo772der8ppmenot17ij5e08m0385.apps.googleusercontent.com">
  <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
