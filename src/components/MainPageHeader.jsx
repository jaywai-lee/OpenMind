import Button from './common/Button/Button';
import styles from './MainPageHeader.module.css';
function MainPageHeader() {
  return (
    <div className={styles.questionGoBtnContainer}>
      <header className={`${styles.questionGoBtnGroup}`}>
        <Button theme="white">질문하러 가기</Button>
      </header>
    </div>
  );
}
export default MainPageHeader;
