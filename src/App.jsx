import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Exo1 from './components/Exo1';

import Exo2 from './components/Exo2';

import Exo3 from './components/Exo3';

import Exo4Header from './components/Exo4Header';

import Exo5 from './components/Exo5';

import Projet from './components/Projet';

import ProjetDetails from './components/ProjetDetails'

import ProjetChecout from "./components/ProjetCheckout"

function App() {

  const router = createBrowserRouter([
    {
      path: "/Projet-Pizza",
      element: <Projet/>,
    },
    {
      path: "/details",
      element: <ProjetDetails/>
    },
    {
      path: "/checkout",
      element: <ProjetChecout/>
    }
  ])

  return (
   <div className='w-screen h-screen flex justify-center flex-col'>
      {/* <Exo1/>
      
      <Exo2/>

      <Exo3/>

      <Exo4Header/>

      <Exo5/> */}

      <RouterProvider router={router}/>
   </div>
  )
}

export default App
