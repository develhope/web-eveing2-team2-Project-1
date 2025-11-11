import "./Itinerari.css";
import van from "/immagini/van.png";
import apiedi from "/immagini/apiedi.png";
import moto from "/immagini/moto.png";
import treno from "/immagini/treno.png";

const itinerari = [
  { icon: van, label: "Itinerari in van" },
  { icon: apiedi, label: "Itinerari a piedi" },
  { icon: moto, label: "Itinerari in moto" },
  { icon: treno, label: "Itinerari in treno" },
];

const Itinerari = () => {
  return (
    <div className="itinerari-container">
      {itinerari.map((item, index) => (
        <div key={index} className="itinerario">
          <img src={item.icon} alt={item.label} className="itinerario-icon" />
          <p className="itinerario-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Itinerari;
