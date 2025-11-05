import ReviewCard from "./ReviewCard";
import CardList from "./CardList";
import WaveAnimation from "./WaveAnimation";
import "./ReviewSection.css";

const reviews = [
  {
    rating: 5,
    text: "Abbiamo visitato l'Islanda con il pacchetto proposto dal sito e ogni dettaglio era curato alla perfezione. Paesaggi mozzafiato, organizzazione impeccabile. Consigliatissimo!",
    author: "Luca R., Milano",
  },
  {
    rating: 4,
    text: "Prenotazione semplice e veloce. Siamo andati a Bali ed è stato tutto come descritto. L’assistenza è ottima.",
    author: "Chiara M., Roma",
  },
  {
    rating: 3,
    text: "Il viaggio in Marocco è stato affascinante, ma l’hotel non era all’altezza. Tour e trasporti ben fatti.",
    author: "Giovanni F., Torino",
  },
  {
    rating: 5,
    text: "Il nostro tour in Giappone è stato un sogno. Tutto perfetto: voli, hotel, itinerari. Torneremo sicuramente!",
    author: "Alessia D., Firenze",
  },
];

const ReviewsSection = () => (
  <section className="recensioni-section">
    <h2>Cosa dicono di noi</h2>
    <WaveAnimation />
    <CardList
      cards={reviews}
      CardComponent={ReviewCard}
      className="recensioni-container"
    />
  </section>
);

export default ReviewsSection;
