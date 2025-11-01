import CardList from "./CardList";
import Card from "./Card";
import "./Card.css";

const horizontalCards = [
  {
    image: "/immagini/van.jpg",
    alt: "Svizzera in Van",
    label: "Svizzera in Van",
  },
  {
    image: "/immagini/states.jpg",
    alt: "Stati Uniti",
    label: "Stati Uniti",
  },
  {
    image: "/immagini/island.jpg",
    alt: "Islanda",
    label: "Islanda",
  },
  {
    image: "/immagini/europe.jpg",
    alt: "Est Europa",
    label: "Est Europa",
  },
];

const HorizontalCards = () => {
  return (
    <CardList
      cards={horizontalCards}
      CardComponent={(props) => <Card {...props} className="horizontal-card" />}
      className="horizontal-cards-container"
    />
  );
};
export default HorizontalCards;
