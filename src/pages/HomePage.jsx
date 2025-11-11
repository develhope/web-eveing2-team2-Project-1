import SearchBar from "../components/Search/SearchBar.jsx";
import ExploreSection from "../components/Card/ExploreSection.jsx";
import HorizontalCards from "../components/Card/HorizontalCards.jsx";
import ReviewsSection from "../components/Card/ReviewSection.jsx";
import HeroWrapper from "../components/Hero/HeroWrapper.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Itinerari from "../components/Itinerary/Itinerari.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <HorizontalCards />
      <Itinerari />
      <HeroWrapper />
      <ExploreSection />
      <ReviewsSection />
      <Footer />
    </>
  );
};

export default HomePage;
