import styles from './_ComponentsPage.module.css';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import FloatingButton from './Button/FloatingButton';
import { ArrowRightLineDisabled } from './Icons/Icons';

function _ComponentPage() {
  return (
    <div className={styles.container}>
      <Badge status="done" /> {/* 답변완료 뱃지 표시 */}
      <Badge status="waiting" /> {/* 미답변 뱃지 표시 */}
      <div>
        <Button theme="dark" isDisabled={false}>
          aaaaa
        </Button>
        <Button theme="white" isDisabled={false}>
          aaaaa
        </Button>
        <Button theme="dark" size="small" isDisabled={false}>
          aaaaa
        </Button>
        <Button theme="white" size="small" isDisabled={false}>
          aaaaa
        </Button>
        <ArrowRightLineDisabled color="#c7bbb5" size={30} />
        <div className={styles.floatingBig}>
          <FloatingButton>질문 작성하기</FloatingButton>
        </div>
        <div className={styles.floatingSmall}>
          <FloatingButton size="small">삭제하기</FloatingButton>
        </div>
      </div>
    </div>
  );
}
export default _ComponentPage;
