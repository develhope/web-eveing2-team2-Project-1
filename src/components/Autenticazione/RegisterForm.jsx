import { useState } from "react";
import "./RegisterForm.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    birth: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Le password non corrispondono!");
      return;
    }
    if (form.password.length < 6) {
      alert("La password deve contenere almeno 6 caratteri!");
      return;
    }
    alert("Registrazione completata con successo!");
    navigate("/");
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>Registrazione</h1>

      <div className="form-grid">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="given-name"
          />
        </div>

        <div>
          <label htmlFor="surname">Cognome</label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={form.surname}
            onChange={handleChange}
            required
            autoComplete="family-name"
          />
        </div>

        <div>
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            name="email"
            id="register-email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="birth">Data di nascita</label>
          <input
            type="date"
            name="birth"
            id="birth"
            value={form.birth}
            onChange={handleChange}
            required
            autoComplete="bday-day"
          />
        </div>

        <div>
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            name="password"
            id="register-password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
        </div>

        <div>
          <label htmlFor="confirm">Conferma password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            value={form.confirm}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
        </div>
      </div>

      <div>
        <p className="terms">
          Creando un account accetti le nostre condizioni su
          <a href="#">Termini e Privacy</a>.
        </p>
      </div>

      <div className="form-footer">
        <Button type="submit" text="Registrati" className="button-primary" />
      </div>
    </form>
  );
}
