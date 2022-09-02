import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider  } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    <Auth0Provider
    domain="dev-jska3woj.us.auth0.com"
    clientId="xuHfBYlobBLaNVq9l7OpPy5n9CiiNOtO"
    redirectUri={window.location.origin}
      >
       <App />

       </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
)
