import {
  FaClock,
  FaEuroSign,
  FaHotel,
  FaUtensils,
  FaBus,
  FaHiking,
  FaCalendar,
  FaFile,
} from "react-icons/fa";
import Hero from "../Hero/Hero";
import { useState } from "react";
import { LiaHeartSolid } from "react-icons/lia";
import { IoHeartOutline } from "react-icons/io5";
import "./Itinerario.css";
import "../Card/Card.css";

const infoCards = [
  { icon: <FaClock />, label: "5 giorni" },
  { icon: <FaHiking />, label: "facile" },
  { icon: <FaCalendar />, label: "Aprile - Settembre" },
  { icon: <FaEuroSign />, label: "1200" },
];

const cosaInclude = [
  { icon: <FaHotel />, label: "Sistemazione in hotel" },
  { icon: <FaUtensils />, label: "Colazione inclusa" },
  { icon: <FaBus />, label: "Trasporti locali e visite guidate" },
  { icon: <FaHiking />, label: "Escursioni programmate" },
  { icon: <FaFile />, label: "Documentazione di viaggio" },
];

const giorniItinerario = [
  {
    title: "Amalfi: tra storia e mare",
    img: "/immagini/amalfi.png",
    description: `L’arrivo ad Amalfi segna l’inizio di un viaggio indimenticabile.
                Passeggiando tra le stradine medievali del centro storico, si
                percepisce la storia che permea ogni angolo, dai piccoli vicoli
                ai caffè affacciati sul mare. Il Duomo domina la piazza
                principale con la sua imponente facciata e invita a scoprire la
                ricchezza artistica e culturale della città. La brezza marina e
                i colori vivaci degli edifici rendono questo primo contatto con
                la Costiera un’esperienza avvolgente e suggestiva.`,
  },
  {
    title: "Ravello: giardini sospesi sul mare",
    img: "/immagini/ravello.jpg",
    description: `A Ravello i celebri giardini di Villa Rufolo e Villa Cimbrone
                offrono panorami che sembrano dipinti. Tra fiori profumati e
                viali ombreggiati, ogni angolo regala scorci sul mare
                scintillante sottostante. Passeggiare qui significa lasciarsi
                avvolgere da un’atmosfera romantica e contemplativa, mentre la
                vista sulla Costiera Amalfitana si apre davanti agli occhi in
                tutta la sua maestosità.`,
  },
  {
    title: "Pompei: un tuffo nel passato",
    img: "/immagini/pompei.jpg",
    description: `La visita a Pompei è un viaggio nel tempo: camminare tra le
                antiche strade lastricate e ammirare le rovine di templi, teatri
                e ville permette di immaginare la vita quotidiana di secoli fa.
                Una guida esperta accompagna tra dettagli e curiosità che
                rendono viva la storia di questa città straordinariamente
                conservata, facendo emergere l’emozione di fronte a
                testimonianze millenarie.`,
  },
  {
    title: "Positano: tra vicoli e mare",
    img: "/immagini/positano.jpg",
    description: `Positano incanta con le sue casette colorate che sembrano
                arrampicarsi sulla roccia. Passeggiare tra i vicoli pieni di
                negozi artigianali e caffè pittoreschi è un piacere per i sensi.
                Il tempo libero in spiaggia permette di rilassarsi ascoltando il
                mare, godendo dei panorami mozzafiato e assaporando appieno
                l’atmosfera unica di questa perla della Costiera Amalfitana.`,
  },
  {
    title: "Sorrento: sapori e addii",
    img: "/immagini/sorrento.jpg",
    description: ` L’ultimo giorno a Sorrento offre un mix di sapori e panorami.
                Passeggiare tra il centro storico significa scoprire botteghe e
                laboratori artigianali, mentre il profumo di limoncello e dolci
                tipici riempie l’aria. È il momento di assaporare fino
                all’ultimo la magia della Costiera, conservando nel cuore
                ricordi indimenticabili e la promessa di tornare.`,
  },
];

const Itinerario = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [favorito, setFavorito] = useState(false);

  const heroData = {
    image: "/immagini/itinerarioamalfi.jpg",
    title: "Itinerario in Costiera Amalfitana",
  };

  return (
    <div>
      <Hero image={heroData.image} alt={heroData.title} />

      <section className="itinerario-header">
        <h1>{heroData.title}</h1>
        <button
          className="preferiti-btn"
          onClick={() => setFavorito(!favorito)}
        >
          {favorito ? <LiaHeartSolid /> : <IoHeartOutline />}{" "}
          {favorito ? "Nei preferiti" : "Aggiungi ai preferiti"}
        </button>
      </section>

      <section className="info-cards">
        {infoCards.map((card) => (
          <div key={card.label} className="info-card">
            {card.icon} <span>{card.label}</span>
          </div>
        ))}
      </section>

      <section className="descrizione">
        <div className="text">
          <h2>Descrizione dell'itinerario</h2>
          <p>
            La Costiera Amalfitana è una delle destinazioni più suggestive
            d’Italia: borghi pittoreschi a picco sul mare, panorami mozzafiato e
            tradizioni antiche si intrecciano lungo questo tratto di costa unico
            al mondo. Durante il tour visiteremo le località più iconiche, tra
            limoneti profumati, mare cristallino e scorci indimenticabili.
          </p>
          <p>
            Ogni giorno sarà un’immersione tra borghi caratteristici e panorami
            da sogno che resteranno impressi nella memoria. Assaporerai piatti
            tipici preparati con ingredienti locali e scoprirai tradizioni
            autentiche, per un’esperienza che unisce cultura, natura e gusto.
          </p>
        </div>
        <div className="side-image">
          <img
            src="/immagini/panoramaamalfi.jpg"
            alt="Panorama Costiera Amalfitana"
          />
        </div>
      </section>

      <section className="itinerario-giorni">
        <div className="text">
          <h2>Itinerario giornaliero</h2>
          <p>
            Un’esperienza di 5 giorni tra Amalfi, Positano e i borghi
            circostanti, con tempo libero per rilassarsi in spiaggia, degustare
            specialità locali e vivere la magia della Costiera.
          </p>

          <div className="giorni-tabs">
            {giorniItinerario.map((giorno, index) => (
              <button
                key={giorno.title}
                className={`tab ${activeDay === index ? "attivo" : ""}`}
                onClick={() => setActiveDay(index)}
              >
                Giorno {index + 1}
              </button>
            ))}
          </div>

          <div className="giorno">
            <div className="attivita-card">
              <img
                src={giorniItinerario[activeDay].img}
                alt={giorniItinerario[activeDay].title}
              />
              <div className="text">
                <h3>{giorniItinerario[activeDay].title}</h3>
                <p>{giorniItinerario[activeDay].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-container">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24223.59911600943!2d14.571025228276206!3d40.630987062308215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b95b54921c5d1%3A0x151a2c999fb2aca9!2s84011%20Amalfi%20SA!5e0!3m2!1sit!2sit!4v1756392584531!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="cosa-include">
          <h3>Cosa include</h3>
          <ul>
            {cosaInclude.map((item) => (
              <li key={item.label}>
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Itinerario;
