import React from "react";
import Usercard from "./components/user";
import user from "./user.json";

import Statistics from "./components/statistics";
import statisticalData from "./statistical-data.json";

import FriendList from "./components/FriendList";
import friends from './friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from "./transactions.json";


const App = () => {
  return (
    <div>
      <Usercard
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.followers}
        views={user.views}
        likes={user.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
