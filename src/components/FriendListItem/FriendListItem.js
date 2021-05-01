import React from 'react';
import PropTypes from 'prop-types';


import styles from "../FriendList/FriendList.module.css"

const FriendListItem = ({ friends }) => {
  return (
      friends.map(({id,avatar,name,isOnline}) =>
      <li id={id} className={styles.item}>
        <span className={
          isOnline ? styles.statusOnline : styles.statusOffline
        }>{isOnline}</span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>)
)
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};




export default FriendListItem;