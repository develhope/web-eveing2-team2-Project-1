import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import { HeroData } from "./HeroData";

const HeroWrapper = () => {
  const location = useLocation();
  const hero = HeroData[location.pathname] || HeroData["/"];

  const heroClass =
    location.pathname === "/amalfi" ? "hero hero-itinerario" : "hero";

  return (
    <Hero
      image={hero.image}
      title={hero.title}
      subtitle={hero.subtitle}
      customClass={heroClass}
    />
  );
};
export default HeroWrapper;
