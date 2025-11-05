import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Itinerario from "./components/Itinerary/Itinerario.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterForm from "./components/Autenticazione/RegisterForm.jsx";
import Navbar from "./components/Navbar.jsx";
import Itinerari from "./components/Itinerari.jsx";


function App() {
  return (
    <Router>
    <Navbar />
    <Itinerari />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/amalfi" element={<Itinerario />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
