import styles from './FeedHeader.module.css';
import logo from '../assets/icons/logo.svg';
import headerImg from '../assets/images/header-image.png';
import UserProfile from './UserProfile';

function FeedHeader() {
  return (
    <div className={styles.wrapper}>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <img className={styles.logo} src={logo} alt="logo" />
      </header>
      <UserProfile />
    </div>
  );
}

export default FeedHeader;
