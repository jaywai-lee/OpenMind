import { Link } from 'react-router-dom';
import Button from './common/Button/Button';
import styles from './MainPageHeader.module.css';
function MainPageHeader() {
  return (
    <div className={styles.questionGoBtnContainer}>
      <header className={`${styles.questionGoBtnGroup}`}>
        <Link to="/list">
          <Button theme="white">질문하러 가기</Button>
        </Link>
      </header>
    </div>
  );
}
export default MainPageHeader;
