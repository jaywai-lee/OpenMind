import styles from './AnswerDropdown.module.css';
import Close from '../assets/icons/close.svg?react';
import Edit from '../assets/icons/edit.svg?react';
import Reject from '../assets/icons/rejection.svg?react';

function AnswerDropdown({ onClick, answer }) {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownGroup} onClick={onClick}>
        <Edit className={styles.dropdownImage}/>
        <span className={styles.dropdownText}>수정하기</span>
      </div>
      <div className={styles.dropdownGroup}>
        <Close className={styles.dropdownImage}/>
        <span className={styles.dropdownText}>삭제하기</span>
      </div>
      { !answer && (
        <div className={styles.dropdownRejectGroup}>
          <Reject width={14} height={14} fill="#B93333"/>
          <span className={styles.dropdownRejectText}>답변거절</span>
        </div>
      )}
    </div>
  );
}
export default AnswerDropdown;