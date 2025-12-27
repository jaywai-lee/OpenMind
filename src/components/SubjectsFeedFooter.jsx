import styles from './SubjectsFeedFooter.module.css';
import FloatingButton from './common/Button/FloatingButton';
import { useToast } from '../context/ToastContext';

function SubjectsFeedFooter({ isMyFeed, onOpenModal }) {
  const { toast } = useToast();
  const handleClick = () => {
    if (isMyFeed) {
      toast('내 피드에는 질문을 작성할 수 없습니다');
      return;
    }
    onOpenModal();
  };
  return (
    <div className={styles.floatingGroup}>
      <FloatingButton onClick={handleClick}>
        <span>질문 작성</span>
        <span className={styles.hideOnMobile}>하기</span>
      </FloatingButton>
    </div>
  );
}

export default SubjectsFeedFooter;
