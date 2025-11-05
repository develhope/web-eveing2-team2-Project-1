import CardList from "./CardList";
import Card from "./Card";

const exploreCards = [
  {
    image: "/immagini/dolomiti.png",
    alt: "Itinerario Dolomiti",
    label: "Itinerario tra le Dolomiti",
  },
  {
    image: "/immagini/route66.png",
    alt: "Itinerario Route 66",
    label: "Itinerario nella Route 66",
  },
  {
    image: "/immagini/amalfi.png",
    alt: "Itinerario Costiera Amalfitana",
    label: "Itinerario in Costiera Amalfitana",
  },
  {
    image: "/immagini/australia.png",
    alt: "Itinerario Australia",
    label: "Itinerario tra le curve dell'Australia",
  },
  {
    image: "/immagini/giappone.png",
    alt: "Itinerario Giappone",
    label: "Itinerario in Giappone",
  },
  {
    image: "/immagini/austria.png",
    alt: "Itinerario Austria",
    label: "Itinerario in Austria",
  },
];
const ExploreSection = () => {
  return (
    <section className="explore">
      <CardList cards={exploreCards} CardComponent={Card} />
    </section>
  );
};
export default ExploreSection;
