import Profile from './components/profile/profile';
import user from './components/profile/user/user.json';
import Statistics from './components/statistics/statistics';
import data from './components/statistics/data/data.json';
import FriendList from './components/friendList/friendList';
import friends from './components/friendList/friends/friends.json';
import './App.css';
import TransactionHistory from "./components/transactionHistory/transactionHistory"
import transactions from "./components/transactionHistory/transactions/transactions.json"


function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
