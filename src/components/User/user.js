import React from "react";
import PropTypes from 'prop-types';

const Usercard = ({name,tag,location,avatar, followers, views, likes }) => {
    return<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt={name}
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
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