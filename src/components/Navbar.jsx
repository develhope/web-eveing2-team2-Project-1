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
      <Navdropdown items={[ "Islanda", "Stati Uniti", "Africa", "Francia", "Spagna", "Portogallo", "Croazia", "Grecia"]} text={"Destinazioni"} />
      <Navdropdown items={[ "Van", "Camper", "Moto", "Macchina", "Treno", "A piedi" ]} text={"Modo di viaggiare"} />
      <Navdropdown items={[ "Avventura", "Relax", "Cultura" ]} text={"Tipo di vacanza"} />
      <Navdropdown items={[ "Autunno", "Inverno", "Primavera", "Estate" ]} text={"Viaggia per stagione"} />
      {/* ICONA CUORE DESTRA */}
      <span className="icon-heart">♡</span>
    </nav>
  );
}

export default Navbar;
