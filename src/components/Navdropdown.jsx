import React, { useState } from "react";
import "./Navbar.css";

function Navdropdown ({items = [], text="", name, menuSet, active}) {
    
return(
<li className="nav-item">
    <button
        className={active ? "active" : ""}
        onClick={() => menuSet(name)}
    >
       {text}
    </button>
        {active && (
        <ul className="dropdown">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        )}
</li>
)
}

export default Navdropdown;