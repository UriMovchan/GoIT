import "./friends.scss";
import PropTypes from "prop-types";
import noImg from "../../../img/no-image.png";
import classNames from "classnames";

const Friends = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <li className="item" key={friend.id}>
        <img
          className="friend__avatar"
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className="friend__name">
          <span
            className={classNames("status", { online: friend.isOnline })}
          ></span>
          {friend.name}
        </p>
      </li>
    ))}
  </ul>
);

Friends.defaultProps = {
  friends: {
    avatar: noImg,
  },
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Friends;
