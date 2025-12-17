import styles from './_ComponentsPage.module.css';
import Badge from './Badge/Badge';
import Button from './Button/Button';

function _ComponentPage() {
  return (
    <div className={styles.container}>
      <Badge status="done" /> {/* 답변완료 뱃지 표시 */}
      <Badge status="waiting" /> {/* 미답변 뱃지 표시 */}
      <div>
        <Button type="dark" isDisabled={true}>
          aaaaa
        </Button>
        <Button type="white" isDisabled={true}>
          aaaaa
        </Button>
      </div>
    </div>
  );
}
export default _ComponentPage;
