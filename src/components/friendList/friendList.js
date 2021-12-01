import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList(props) {
  const { friends } = props;

  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span className={styles[friend.isOnline ? 'green' : 'red']}></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className={friend.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
