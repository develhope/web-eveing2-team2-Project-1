import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";
import HeartIcon from "./HeartIcon";
import "./LoginDropdown.css";

export default function LoginDropdown() {
  const emailRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      emailRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="nav-icons">
      <HeartIcon className="icon" />

      <div className="user-login-container" ref={dropdownRef}>
        <UserIcon className="icon" onClick={toggleDropdown} />

        <div className={`dropdown ${isOpen ? "show" : "hide"}`}>
          <h3>Login</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Login effettuato (simulazione).");
            }}
          >
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              ref={emailRef}
              required
              autoComplete="email"
            />
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="password"
              required
              autoComplete="current-password"
            />
            <div className="button_group">
              <button type="submit">Accedi</button>
              <Link to="/register">Registrati</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
