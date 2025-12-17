import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable = {true}
      pauseOnHover = {true}
      theme="light"
      transition={Bounce}
    />
  </StrictMode>,
)
