import styles from './AnswerDropdown.module.css';
import close from '../assets/icons/close.svg';
import edit from '../assets/icons/edit.svg';
import reject from '../assets/icons/rejection.svg';

function AnswerDropdown({ onClick }) {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownGroup} onClick={onClick}>
        <img className={styles.dropdownImage} src={edit} alt="" />
        <span className={styles.dropdownText}>수정하기</span>
      </div>
      <div className={styles.dropdownGroup}>
        <img className={styles.dropdownImage} src={close} alt="" />
        <span className={styles.dropdownText}>삭제하기</span>
      </div>
      <div className={styles.dropdownRejectGroup}>
        <img className={styles.dropdownImage} src={reject} alt="" />
        <span className={styles.dropdownText}>답변거절</span>
      </div>
    </div>
  );
}
export default AnswerDropdown;