import React, { useContext } from "react";

import { Outlet } from "react-router-dom";
import  Header  from "../components/Header.jsx";



export const Root = () => {
  

  return (
    <>
    <div className="background-image-container">
      <Header/>
      <Outlet/>
    </div>
    
    </>
  );
};



