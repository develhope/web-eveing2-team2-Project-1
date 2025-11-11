import { useState } from "react";
import "./Navbar.css";
import Navdropdown from "./Navdropdown";
import LoginDropdown from "../Autenticazione/LoginDropdown";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false); // <--- nuovo stato

  const handleOpenMenuClick = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <img src="/immagini/logo.png" alt="logo" className="logo" />

        {/* HAMBURGER ICON visibile solo su mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={mobileOpen ? "bar open" : "bar"}></span>
          <span className={mobileOpen ? "bar open" : "bar"}></span>
          <span className={mobileOpen ? "bar open" : "bar"}></span>
        </div>

        {/* MENU PRINCIPALE */}
        <div className={`nav-menu ${mobileOpen ? "active" : ""}`}>
          <Navdropdown
            items={[
              "Islanda",
              "Stati Uniti",
              "Africa",
              "Francia",
              "Spagna",
              "Portogallo",
              "Croazia",
              "Grecia",
            ]}
            text={"Destinazioni"}
            name={"Destinazione"}
            menuSet={handleOpenMenuClick}
            active={activeMenu == "Destinazione" ? true : false}
          />
          <Navdropdown
            items={["Van", "Camper", "Moto", "Macchina", "Treno", "A piedi"]}
            text={"Modo di viaggiare"}
            name={"Viaggio"}
            menuSet={handleOpenMenuClick}
            active={activeMenu == "Viaggio" ? true : false}
          />
          <Navdropdown
            items={["Avventura", "Relax", "Cultura"]}
            text={"Tipo di vacanza"}
            name={"Tipo"}
            menuSet={handleOpenMenuClick}
            active={activeMenu == "Tipo" ? true : false}
          />
          <Navdropdown
            items={["Autunno", "Inverno", "Primavera", "Estate"]}
            text={"Viaggia per stagione"}
            name={"Stagione"}
            menuSet={handleOpenMenuClick}
            active={activeMenu == "Stagione" ? true : false}
          />
        </div>
      </div>
      <LoginDropdown />
    </nav>
  );
}

export default Navbar;