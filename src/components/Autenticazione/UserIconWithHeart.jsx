import HeartIcon from "./HeartIcon";
import UserIcon from "./UserIcon";

const UserIconWithHeart = ({ onUserClick }) => {
  return (
    <div className="user-icon-with-heart">
      <HeartIcon />
      <UserIcon onClick={onUserClick} />
    </div>
  );
};

export default UserIconWithHeart;
