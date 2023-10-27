import Inicio from "./components/layouts/Inicio"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import QuinesSomos from "./components/layouts/QuinesSomos"
import Vehiculos from "./components/layouts/Vehiculos"
import Materiales from "./components/layouts/Materiales"
import Contacto from "./components/layouts/Contacto"
import Listadotrabajos from "./components/layouts/Listadotrabajos"
import EditarTrabajo from "./components/layouts/EditarTrabajo"
import { CrearTrabajo } from "./components/layouts/CrearTrabajo"
let router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio/>
  },
  {
    path: '/quienesSomos',
    element: <QuinesSomos/>
  },
  {
    path: '/vehiculos',
    element: <Vehiculos/>
  },
  {
    path: '/materiales',
    element: <Materiales/>
  },
  {
    path: '/contacto',
    element: <Contacto/>
  },
  {
    path: '/lista-trabajos',
    element: <Listadotrabajos/>
  },
  {
    path: '/editar-trabajo/:id',
    element: <EditarTrabajo/>
  },
  {
    path: '/crear-trabajo',
    element: <CrearTrabajo/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
