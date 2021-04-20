import React from "react";
import PropTypes from 'prop-types';

import './User.css';

const Usercard = ({name,tag,location,avatar, followers, views, likes }) => {
  return <div className="profile">
  <div className="description">
    <img 
      src={avatar}
      alt={name}
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>;
};




Usercard.defaultProps = {
  name:"Не пришел бекенд)))))"
}

Usercard.propTypes = {
  name: PropTypes.string,
  avatar:PropTypes.string.isRequired,
};

export default Usercard;