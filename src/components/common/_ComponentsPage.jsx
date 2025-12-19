import styles from './_ComponentsPage.module.css';
import Badge from './Badge/Badge';
import Button from './Button/Button';

function _ComponentPage() {
  return (
    <div className={styles.container}>
      <Badge status="done" /> {/* 답변완료 뱃지 표시 */}
      <Badge status="waiting" /> {/* 미답변 뱃지 표시 */}
      <div>
        <Button theme="dark" isDisabled={true}>
          aaaaa
        </Button>
        <Button theme="white" isDisabled={true}>
          aaaaa
        </Button>
        <Button theme="dark" size="small" isDisabled={true}>
          aaaaa
        </Button>
        <Button theme="white" size="small" isDisabled={true}>
          aaaaa
        </Button>
      </div>
    </div>
  );
}
export default _ComponentPage;
