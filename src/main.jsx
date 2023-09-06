import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignUp /> },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position="bottom-right" />
    <RouterProvider router={router} />

  </React.StrictMode>,
)
