import "../styles/header.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpenMenuOverlay, setIsOpenMenuOverlay] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   ser till att menuOverlayen inte är öppen när skärmen är över 701px
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 701) {
        setIsOpenMenuOverlay(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpenMenuOverlay(!isOpenMenuOverlay);
  };

  return (
    <>
      <section className="header">
        <NavLink className="header__container header__container--navbar">
          Start
        </NavLink>
        <div className="header__container">
      

        <NavLink to="/kontakt" className="header__container--navbar">
            Kontakt
          </NavLink>
          <NavLink to="/organisation" className="header__container--navbar">Organisation</NavLink>
       
          <NavLink to="/login" className=" header__container--navbar material-symbols-outlined person">
person
</NavLink>
        </div>
       
        <span className="material-symbols-outlined menu" onClick={toggleMenu}>
          Menu
        </span>
      </section>
      {isOpenMenuOverlay && windowWidth <= 701 && (
        <div className="menu-overlay">
          <div className="menu-overlay__content">
            <NavLink  to="/kontakt" className="menu-item">Kontakt</NavLink>
            <NavLink to="/organisation" className="menu-item">Organisation</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
