import "./profile.scss";
import PropsTypes from "prop-types";
import noImg from "../../../img/no-image.png";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt={tag} className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: noImg,
};

Profile.propsTypes = {
  avatar: PropsTypes.string,
  name: PropsTypes.string.isRequired,
  tag: PropsTypes.string.isRequired,
  location: PropsTypes.string.isRequired,
  stats: PropsTypes.shape({
    followers: PropsTypes.number.isRequired,
    views: PropsTypes.number.isRequired,
    likes: PropsTypes.number.isRequired,
  }),
};

export default Profile;
