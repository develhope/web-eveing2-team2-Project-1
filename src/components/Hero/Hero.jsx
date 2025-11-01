import "../Card/Card.css";

const Hero = ({ image, alt, title, subtitle, customClass = "hero" }) => {
  return (
    <div className={customClass}>
      <img src={image} alt={alt || "Hero image"} />

      {(title || subtitle) && (
        <div className="hero-text">
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
        </div>
      )}
    </div>
  );
};

export default Hero;
