import React from "react";
import PropTypes from 'prop-types';

import styles from './User.module.css';

const UserCard = ({name,tag,location,avatar,...stats}) => {
  return <div className={styles.profile}>
    <div className={styles.description}>
    <img 
      src={avatar}
      alt={name}
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
    <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>;
};




UserCard.defaultProps = {
  name:"Backend is not working)))))"
}

UserCard.propTypes = {
  name: PropTypes.string,
  avatar:PropTypes.string.isRequired,
};

export default UserCard;