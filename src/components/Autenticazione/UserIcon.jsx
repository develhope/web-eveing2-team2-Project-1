import { FaRegUser } from "react-icons/fa";

const UserIcon = ({ onClick }) => {
  return (
    <FaRegUser onClick={onClick} className="user-icon-top" aria-label="Login" />
  );
};
export default UserIcon;
