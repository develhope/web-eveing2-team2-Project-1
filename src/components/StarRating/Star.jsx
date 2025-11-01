import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Star = ({ filled }) => {
  if (filled === "full") {
    return <FaStar className="star" />;
  } else if (filled === "half") {
    return <FaStarHalfAlt className="half" />;
  } else {
    return <FaRegStar className="star" />;
  }
};

export default Star;
