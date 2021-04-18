import React from 'react';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return <ul class="friend-list">
    {friends.map((friend) => <li id={friend.id} class="item">
     <span class="status">{friend.isOnline}</span>
  <img class="avatar" src={friend.avatar} alt="" width="48" />
  <p class="name">{friend.name}</p>
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