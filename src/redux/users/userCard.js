import PropTypes from 'prop-types';

function UserCard({ name, lastname }) {
  return (
    <li>
      User:
      <span>{ name }</span>
      <span>{ lastname }</span>
    </li>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default UserCard;