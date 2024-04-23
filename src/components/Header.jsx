import "../styles/header.css";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import hillringsberg from "../images/hillringsberg.png";

function Header() {
  const [isOpenMenuOverlay, setIsOpenMenuOverlay] = useState(false);
  const [isPersonIconOpen, setIsPersonIconOpen] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownmenu = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  // Stäng dropdownmenyn när användaren klickar utanför
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdownMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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

  // öppna och stäng menyoverlayen i mobilmode
  const toggleMenu = () => {
    setIsOpenMenuOverlay(!isOpenMenuOverlay);
  };

  // Navigerar till och från "/" från person ikonen i navbaren
  const handlePersonIconClick = () => {
    if (!isPersonIconOpen) {
      setIsPersonIconOpen(true);
    } else {
      setIsPersonIconOpen(false);
    }
  };

  return (
    <>
      <section className="header">
        <NavLink to="/start">
          <img
            className="header__container--loggo"
            src={hillringsberg}
            alt="Hillringsbergslogga"
          />
        </NavLink>
        <div className="header__container" >
          <div
            className="header__container--navbar"
            onClick={dropdownmenu}
         
          >
            Om Eljusspåret
          </div>
          {showDropdownMenu && (
            <div ref={dropdownRef} className="dropdown-content">
              <NavLink to="/projektet-naturkraft">Projektet Naturkraft</NavLink>
              <NavLink to="/samarbetspartners">Samarbetspartners</NavLink>
              <NavLink to="/vill-du-veta-mer">Vill du veta mer?</NavLink>
            </div>
          )}

          <NavLink to="/kontakt" className="header__container--navbar">
            Hitta hit
          </NavLink>

          <NavLink
            to={isPersonIconOpen ? "/" : "/login"}
            className="header__container--navbar material-symbols-outlined person"
            onClick={handlePersonIconClick}
          >
            person
          </NavLink>
        </div>

        {/* Mobilikoner */}
        <span className="material-symbols-outlined menu" onClick={toggleMenu}>
          Menu
        </span>
      </section>
      {isOpenMenuOverlay && windowWidth <= 701 && (
        <div className="menu-overlay">
          <div className="menu-overlay__content">
          

            <NavLink className="menu-item" to="/projektet-naturkraft">Projektet Naturkraft</NavLink>
              <NavLink className="menu-item" to="/samarbetspartners">Samarbetspartners</NavLink>
              <NavLink className="menu-item" to="/vill-du-veta-mer">Vill du veta mer?</NavLink>

              <NavLink className="menu-item" to="/vill-du-veta-mer">Hitta hit</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
