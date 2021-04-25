import React from "react";
import Usercard from "./components/User/user";
import user from "./components/User/user.json";

import Statistics from "./components/Statistics/statistics";
import statisticalData from "./components/Statistics/statistical-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from "./components/Transactions/transactions.json";


const App = () => {
  return (
    <div>
      <Usercard
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
  
      <Statistics title="Upload stats"
        stats={statisticalData} />;
       

      <Statistics stats={statisticalData} />;


      <FriendList friends={friends} />,

      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
