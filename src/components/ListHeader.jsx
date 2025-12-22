import styles from './ListHeader.module.css';
import logo from '../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import Button from './common/Button/Button';
import storage from '../utils/storage';

function ListHeader() {
  const id = storage.get('userId');
  return (
    <div className={styles.group}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
      <Link to={`/post/${id}/answer`}>
        <Button theme="white">답변하러 가기</Button>
      </Link>
    </div>
  );
}

export default ListHeader;
