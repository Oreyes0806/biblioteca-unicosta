import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import PaginaNoEncontrada from './components/common/paginaNoEncontrada/PaginaNoEncontrada.jsx';
import GaleriaLibros from './components/libros/GaleriaLibros.jsx';
import Ingreso from './components/autenticacion/Ingreso.jsx';
import Registro from './components/autenticacion/Registro.jsx';
import AdministracionShell from './components/administracion/AdministracionShell.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <h1>Home</h1>
      },
      {
        path: "ingreso",
        element: <Ingreso />,
      },
      {
        path: "registro",
        element: <Registro />,
      },
      {
        path: "admin",
        element: <AdministracionShell />,
        children: [
          {
            path: "agregarLibro",
            element: <h1>Add Book</h1>,
          },
          {
            path: "editarLibro/:idLibro",
            element: <h1>Edit Book</h1>,
          },
        ]
      },
      {
        path: "libros",
        element: <GaleriaLibros />,
      }
    ],
    errorElement: <PaginaNoEncontrada />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
