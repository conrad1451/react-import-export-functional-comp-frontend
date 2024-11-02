import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ApiDataDisplayer from './App2.tsx'
import AxiosApp from './apiCallTest/AxiosApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <AxiosApp/> */}
    {/* <ApiDataDisplayer/> */}
  </StrictMode>,
)
