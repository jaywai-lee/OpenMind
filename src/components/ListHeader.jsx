import styles from './ListHeader.module.css';
import logo from '../assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Button from './common/Button/Button';
import storage from '../utils/storage';

// id가 null 이거나 or 그냥 눌렀을 때[로컬스토리지가 있는데 누르기 or 없는데 누르기] 다만족 -> Link to 보내고 아니면 /로

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
