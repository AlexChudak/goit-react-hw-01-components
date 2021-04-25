import React from 'react';
import propTypes from 'prop-types';

import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return <ul className={styles.friend_list}>
    {friends.map((friend) => <li id={friend.id} className={styles.item}>
     <span className={
            friend.isOnline ? styles.statusOnline : styles.statusOffline
          }>{friend.isOnline}</span>
  <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
  <p className={styles.name}>{friend.name}</p>
    </li>)}
   


    </ul>
}


FriendList.propTypes = {
  id:propTypes.number,
  name:propTypes.string,
  avatar:propTypes.string.isRequired,
  isOnline:propTypes.bool
}





export default FriendList;