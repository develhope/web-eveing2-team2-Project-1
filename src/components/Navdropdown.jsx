import "./Navbar.css";

function Navdropdown({ items = [], text = "", name, menuSet, active }) {
  return (
    <li className="navdropdown">
      <button className={active ? "active" : ""} onClick={() => menuSet(name)}>
        {text}
      </button>
      {active && (
        <ul className="navdropdown-menu">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default Navdropdown;
