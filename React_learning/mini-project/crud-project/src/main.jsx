import {ToastContainer} from "react-toastify"
import { createRoot } from 'react-dom/client'
import "react-toastify/dist/ReactToastify.css"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer position="top-center"/>
  </>
)
