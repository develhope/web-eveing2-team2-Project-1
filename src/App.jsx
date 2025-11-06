import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Itinerario from "./components/Itinerary/Itinerario.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterForm from "./components/Autenticazione/RegisterForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/amalfi" element={<Itinerario />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
