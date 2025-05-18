import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';



createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <CssVarsProvider 
      defaultMode="light"
      colorSchemeSelector="body" 
      modeStorageKey="my-app-theme" 
    > */}
    <App />
    {/* </CssVarsProvider> */}
  </StrictMode>,
)
