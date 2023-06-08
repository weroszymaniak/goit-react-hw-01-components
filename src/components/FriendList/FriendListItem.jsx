import PropTypes from 'prop-types';
import './FriendListItem.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className="friend-item">
      <span className={isOnline ? 'statusOnline' : 'statusOffline'}></span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-name">{name}</p>
    </li>
  );
}

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
