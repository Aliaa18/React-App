import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Parent from "./Components/Parent/Parent";
import About from "./Components/About/About/About";
import Contact from "./Components/Contact/Contact";
import Portofolio from "./Components/Portofolio/Portofolio";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";

export default function App(){
  let routers=createHashRouter([
    {path:'/' , element:<Layout/> , children:[
      {index:true , element:<Parent/>},
      {path:'portofolio', element:<Portofolio/>},
      {path:'about', element:<About/>},
      {path:'contact', element:<Contact/>},
      {path:'*', element:<Notfound/>}
    ]}

  ])
  
  return<>
       <RouterProvider router={routers}></RouterProvider>
  </>
}