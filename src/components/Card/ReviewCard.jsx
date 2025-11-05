import { FaUserCircle } from "react-icons/fa";
import StarRating from "../StarRating/StarRating";
import { CardBase } from "./CardBase";

const ReviewCard = ({ rating, text, author }) => {
  return (
    <CardBase className="recensione-box">
      <FaUserCircle className="user-icon" />
      <StarRating rating={rating} />
      <p>{text}</p>
      <div className="author">- {author}</div>
    </CardBase>
  );
};

export default ReviewCard;
