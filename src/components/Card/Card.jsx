import ImageCard from "./ImageCard";
import ReviewCard from "./ReviewCard";

const Card = ({ cardType = "image", className = "", ...props }) => {
  if (cardType === "review") {
    return <ReviewCard {...props} className={className} />;
  }
  return <ImageCard {...props} className={className} />;
};
export default Card;
