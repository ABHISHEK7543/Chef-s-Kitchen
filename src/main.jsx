import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecipeData from './Context/RecipeData.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <RecipeData>
    <BrowserRouter>
     
     <App />
      <ToastContainer/>
     </BrowserRouter>
  </RecipeData>
   
  
)
