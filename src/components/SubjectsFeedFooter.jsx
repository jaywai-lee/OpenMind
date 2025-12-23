import styles from './SubjectsFeedFooter.module.css';
import FloatingButton from './common/Button/FloatingButton';

function SubjectsFeedFooter({ isMyFeed, onOpenModal }) {
  const handleClick = () => {
    if (isMyFeed) {
      alert('내 피드에는 질문을 작성할 수 없습니다.');
      return;
    }
    onOpenModal();
  };
  return (
    <div className={styles.floatingGroup}>
      <FloatingButton onClick={handleClick}>
        <span>질문 작성</span>
        <span className={styles.desktopOnly}>하기</span>
      </FloatingButton>
    </div>
  );
}

export default SubjectsFeedFooter;
