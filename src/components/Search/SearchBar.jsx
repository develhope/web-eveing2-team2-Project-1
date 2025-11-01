import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const itinerari = [
  { name: "Costiera Amalfitana", link: "/amalfi" },
  { name: "Giappone" },
  { name: "Islanda" },
  { name: "Cinque Terre" },
  { name: "Stati Uniti" },
  { name: "Svizzera" },
  { name: "Australia" },
  { name: "Dolomiti" },
  { name: "Route 66" },
  { name: "Austria" },
];

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInput = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setQuery(value);

    if (value === "") {
      setFiltered([]);
      setActive(false);
      return;
    }

    const matched = itinerari.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFiltered(matched);
    setActive(true);
  };

  const handleClick = (item) => {
    if (item.link) {
      navigate(item.link);
      setQuery("");
      setActive(false);
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-title">CERCA IL TUO ITINERARIO</h2>
      <div className="search-bar" ref={ref}>
        <div className="icon">
          <FaSearch className="search-icon" />
        </div>
        <input
          type="text"
          placeholder="Cerca il tuo itinerario"
          value={query}
          onChange={handleInput}
        />
        <ul className={`search-results ${active ? "active" : ""}`}>
          {filtered.map((item, index) => (
            <li
              key={index}
              className={item.link ? "clickable" : ""}
              onClick={() => handleClick(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
