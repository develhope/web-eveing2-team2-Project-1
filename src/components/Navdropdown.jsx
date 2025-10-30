import React, { useState } from "react";
import "./Navbar.css";

function Navdropdown ({items = [], text=""}) {
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
return(
<li className="nav-item">
    <button
        className={activeMenu === "modo" ? "active" : ""}
        onClick={() => handleMenuClick("modo")}
    >
       {text}
    </button>
        {openMenu === "modo" && (
        <ul className="dropdown">
            {items.map((item) => <li>{item}</li>)}
        </ul>
        )}
</li>
)
}

export default Navdropdown;