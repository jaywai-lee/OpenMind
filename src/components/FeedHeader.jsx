import styles from './FeedHeader.module.css';
import logo from '../assets/icons/logo.svg';
import headerImage from '../assets/images/header-image.png';
import UserProfile from './UserProfile';

function FeedHeader({ subject }) {
  return (
    <div className={styles.group}>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <img className={styles.logo} src={logo} alt="logo" />
      </header>
      {subject && <UserProfile subject={subject} />}
    </div>
  );
}

export default FeedHeader;
