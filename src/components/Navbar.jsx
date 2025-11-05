import React, { useState } from "react";
import "./Navbar.css";
import Navdropdown from "./Navdropdown";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);


   const handleOpenMenuClick = (menuName) => {
    if (activeMenu === menuName) {
     setActiveMenu(null);
    } else { 
      setActiveMenu(menuName);
    }
  };

  return (
    <nav className="navbar">
      {/* LOGO SINISTRA */}
      <img src="/logo.png" alt="logo" className="logo" />

      {/* VOCI DI MENU */}
      <Navdropdown items={[ "Islanda", "Stati Uniti", "Africa", "Francia", "Spagna", "Portogallo", "Croazia", "Grecia"]} text={"Destinazioni"} name ={"Destinazione"} menuSet={handleOpenMenuClick} active={activeMenu=="Destinazione" ? true : false}/>
      <Navdropdown items={[ "Van", "Camper", "Moto", "Macchina", "Treno", "A piedi" ]} text={"Modo di viaggiare"} name ={"Viaggio"} menuSet={handleOpenMenuClick} active={activeMenu=="Viaggio" ? true : false}/>
      <Navdropdown items={[ "Avventura", "Relax", "Cultura" ]} text={"Tipo di vacanza"} name ={"Tipo"} menuSet={handleOpenMenuClick} active={activeMenu=="Tipo" ? true : false}/>
      <Navdropdown items={[ "Autunno", "Inverno", "Primavera", "Estate" ]} text={"Viaggia per stagione"} name ={"Stagione"} menuSet={handleOpenMenuClick} active={activeMenu=="Stagione" ? true : false}/>
      {/* ICONA CUORE DESTRA */}
      <span className="icon-heart">♡</span>
    </nav>
  );
}

export default Navbar;
