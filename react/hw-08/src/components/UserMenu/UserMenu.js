import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail } from "redux/user/userSelector";
import { postLogout } from "redux/user/userAction";

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  return (
    <>
      <span>{email}</span>
      <button
        className="logout__btn"
        onClick={() => {
          dispatch(postLogout());
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserMenu;
