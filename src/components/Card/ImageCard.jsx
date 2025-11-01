import { CardBase } from "./CardBase";

const ImageCard = ({ image, alt, label, className = "" }) => (
  <CardBase className={`image-card ${className}`}>
    {image && <img src={image} alt={alt || "Card image"} />}
    {label && <div className="label">{label}</div>}
  </CardBase>
);

export default ImageCard;
