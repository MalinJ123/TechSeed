import * as MUI from '@mui/material/';
import * as MUIIcons from '@mui/icons-material';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/header.css";
import hillringsberg from "../images/main/logotype.png";

export default function Header() {
  const navigate = useNavigate();

  const [isOpenMenuOverlay, setIsOpenMenuOverlay] = useState(false);
  const [isPersonIconOpen, setIsPersonIconOpen] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  // Dropdown
  const [headerDropdown, setHeaderDropdown] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);

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
        <MUI.Link to="/start">
          <img
            className="header__container--loggo"
            src={hillringsberg}
            alt="Hillringsbergslogga"
          />
        </MUI.Link>
        <div className="header__container" >
          <MUI.Button id="header__dropdown-button" aria-controls={headerDropdown ? 'header__dropdown-menu' : undefined} aria-expanded={headerDropdown ? 'true' : undefined} variant="outlined" type="button" aria-haspopup="true" onClick={(event) => {setHeaderDropdown(!headerDropdown); setDropdownAnchorEl(event.currentTarget)}} disableElevation endIcon={headerDropdown ? <MUIIcons.KeyboardArrowUp /> : <MUIIcons.KeyboardArrowDown />} sx={{backgroundColor: 'transparent', color: '#fff', border: '1px solid transparent'}}>
            Om Eljusspåret
          </MUI.Button>
            <MUI.Menu id="header__dropdown-menu" MenuListProps={{'aria-labelledby': 'header__dropdown-button'}} open={headerDropdown} onClose={() => setHeaderDropdown(false)} anchorEl={dropdownAnchorEl}>
              <MUI.MenuItem disableRipple onClick={() => navigate("/projektet-naturkraft")}>Projektet Naturkraft</MUI.MenuItem>
              <MUI.MenuItem disableRipple onClick={() => navigate("/samarbetspartners")}>Samarbetspartners</MUI.MenuItem>
              <MUI.MenuItem disableRipple onClick={() => navigate("/vill-du-veta-mer")}>Vill du veta mer?</MUI.MenuItem>
            </MUI.Menu>

          <MUI.Link to="/kontakt" className="header__container--navbar">
            Hitta hit
          </MUI.Link>

          <MUI.Link
            to={isPersonIconOpen ? "/" : "/login"}
            className="header__container--navbar material-symbols-outlined person"
            onClick={handlePersonIconClick}
          >
            person
          </MUI.Link>
        </div>

        {/* Mobilikoner */}
        <span className="material-symbols-outlined menu" onClick={toggleMenu}>
          Menu
        </span>
      </section>
      {isOpenMenuOverlay && windowWidth <= 701 && (
        <div className="menu-overlay">
          <div className="menu-overlay__content">
          

            <MUI.Link className="menu-item" to="/projektet-naturkraft">Projektet Naturkraft</MUI.Link>
            <MUI.Link className="menu-item" to="/samarbetspartners">Samarbetspartners</MUI.Link>
            <MUI.Link className="menu-item" to="/vill-du-veta-mer">Vill du veta mer?</MUI.Link>
            <MUI.Link className="menu-item" to="/vill-du-veta-mer">Hitta hit</MUI.Link>
          </div>
        </div>
      )}
    </>
  );
}
