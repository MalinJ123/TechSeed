import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import  Header  from "../components/Header.jsx";



export const Root = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <section className="background-image-container">

        <h2>Första sida innan man är inloggad</h2>
    </section>
      
    </>
  );
};
