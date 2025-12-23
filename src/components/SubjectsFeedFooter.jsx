import styles from './SubjectsFeedFooter.module.css';
import FloatingButton from './common/Button/FloatingButton';

function SubjectsFeedFooter({ onOpenModal }) {
  return (
    <div className={styles.floatingGroup}>
      <FloatingButton onClick={onOpenModal}>
        <span>질문 작성</span>
        <span className={styles.desktopOnly}>하기</span>
      </FloatingButton>
    </div>
  );
}

export default SubjectsFeedFooter;
