import React, { useState } from "react";
import "./Navbar.css";
import Navdropdown from "./Navdropdown";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);


   const handleMenuClick = (menuName) => {
    if (openMenu === menuName) {
      setOpenMenu(null);
      setActiveMenu(null);
    } else {
      setOpenMenu(menuName);
      setActiveMenu(menuName);
    }
  };

  return (
    <nav className="navbar">
      {/* LOGO SINISTRA */}
      <img src="/logo.png" alt="logo" className="logo" />

      {/* VOCI DI MENU */}
      <ul className="nav-list">
        <li className="nav-item">
          <button
            className={activeMenu === "destinazioni" ? "active" : ""}
            onClick={() => handleMenuClick("destinazioni")}
          >
            Destinazioni
          </button>
          {openMenu === "destinazioni" && (
            <ul className="dropdown">
              <li>Islanda</li>
              <li>Stati Uniti</li>
              <li>Africa</li>
              <li>Francia</li>
              <li>Spagna</li>
              <li>Portogallo</li>
              <li>Croazia</li>
              <li>Grecia</li>
            </ul>
          )}
        </li>
      <li className="nav-item">
        <button
          className={activeMenu === "modo" ? "active" : ""}
          onClick={() => handleMenuClick("modo")}
        >
          Modo di viaggiare
        </button>
          {openMenu === "modo" && (
            <ul className="dropdown">
              <li>Van</li>
              <li>Camper</li>
              <li>Moto</li>
              <li>Macchina</li>
              <li>Treno</li>
              <li>A piedi</li>
            </ul>
          )}
      </li>

      <li className="nav-item">
          <button
            className={activeMenu === "tipo" ? "active" : ""}
            onClick={() => handleMenuClick("tipo")}
          >
            Tipo di vacanza
          </button>
          {openMenu === "tipo" && (
            <ul className="dropdown">
              <li>Avventura</li>
              <li>Relax</li>
              <li>Cultura</li>
            </ul>
          )}
      </li>

        <li className="nav-item">
          <button
            className={activeMenu === "stagione" ? "active" : ""}
            onClick={() => handleMenuClick("stagione")}
          >
            Viaggia per stagione
          </button>
          {openMenu === "stagione" && (
            <ul className="dropdown">
              <li>Inverno</li>
              <li>Estate</li>
              <li>Primavera</li>
              <li>Autunno</li>
            </ul>
          )}
        </li>
      </ul>
      <Navdropdown items={[ "testo1", "testo2", "testo3" ]} text={"nome dropdown"} />
      <Navdropdown items={[ "testo4", "testo5", "testo6" ]} text={"nome dropdown 2"} />
      {/* ICONA CUORE DESTRA */}
      <span className="icon-heart">♡</span>
    </nav>
  );
}

export default Navbar;
