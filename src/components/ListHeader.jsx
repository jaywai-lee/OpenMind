import styles from './ListHeader.module.css';
import logo from '../assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Button from './common/Button/Button';
import storage from '../utils/storage';

function ListHeader() {
  const navigate = useNavigate();
  const id = storage.get('userId');
  const handleLink = () => {
    if (!id) {
      navigate(`/`);
    } else {
      navigate(`/post/${id}/answer`);
    }
  };
  return (
    <div className={styles.group}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>

      <div className={styles.linkButton}>
        <Button theme="white" onClick={handleLink}>
          답변하러 가기
        </Button>
      </div>
    </div>
  );
}

export default ListHeader;
