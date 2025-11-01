import Star from "./Star";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="stars">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} filled="full" />
      ))}
      {hasHalfStar && <Star filled="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} filled="empty" />
      ))}
    </div>
  );
};

export default StarRating;
