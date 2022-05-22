import PropTypes from 'prop-types';
import style from './notification.module.css';

function Notification({ message }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{message}</h2>
    </div>
  );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};