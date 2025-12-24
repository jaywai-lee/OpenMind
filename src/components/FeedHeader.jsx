import styles from './FeedHeader.module.css';
import logo from '../assets/icons/logo.svg';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';

function FeedHeader({ subject }) {
  return (
    <div className={styles.group}>
      <header className={styles.header}>
        <Link to="/" aria-label="메인 페이지">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </header>
      {subject && <UserProfile subject={subject} />}
    </div>
  );
}

export default FeedHeader;
