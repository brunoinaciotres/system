import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pedidos from './components/organisms/pages/Pedidos/Pedidos.jsx';
import Template from './components/organisms/Template.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template pageTitle="Home"  buttonText = "Home"/>
  },
  {
    path: "/pedidos",
    element: <Template pageBody={<Pedidos/>} pageTitle="Pedidos" buttonText="Adicionar" active="pedidos"/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
