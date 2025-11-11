import { useRef } from "react";
import Card from "./Card";
import "./Card.css";

const horizontalCards = [
  { image: "/immagini/van.jpg", alt: "Svizzera in Van", label: "Svizzera in Van" },
  { image: "/immagini/states.jpg", alt: "Stati Uniti", label: "Stati Uniti" },
  { image: "/immagini/island.jpg", alt: "Islanda", label: "Islanda" },
  { image: "/immagini/europe.jpg", alt: "Est Europa", label: "Est Europa" },
];

const HorizontalCards = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector(".card")?.offsetWidth || 300;
    const scrollAmount = cardWidth + 24; // 24px di gap
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper">
      <button className="arrow left" onClick={() => scroll("left")}>
        &#10094;
      </button>

      <div className="carousel-container" ref={scrollRef}>
        {horizontalCards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.alt} className="card-image" />
            <p className="label">{card.label}</p>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default HorizontalCards;