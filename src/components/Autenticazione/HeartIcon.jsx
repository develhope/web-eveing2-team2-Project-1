import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartIcon = ({ size = 22 }) => {
  const [liked, setLiked] = useState(false);

  const toggleHeart = (e) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
  };
  return (
    <div className={`heart-icon ${liked ? "liked" : ""}`} onClick={toggleHeart}>
      {liked ? <AiFillHeart size={size} /> : <AiOutlineHeart size={size} />}
    </div>
  );
};

export default HeartIcon;
