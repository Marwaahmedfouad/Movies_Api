// import React, { Children } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Slider from './Components/Slider/Slider';
import Gallary from './Components/Gallary/Gallary';
import Error from './Components/Error/Error';
import Layout from './Components/Layout/Layout';

export default function App() {
  let routers = createBrowserRouter([{path:'',element:<Layout/>,children:[ 
    {index:true,element:<Home/>},
    {path:'gallary',element: <Gallary/>},
    {path:'slider',element:<Slider/>},
    {path:'*',element:<Error/>}
  ]}
   ])

  return (<>
<RouterProvider router={routers}></RouterProvider>

    </>

  )
}