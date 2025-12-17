import styles from './ComponentsPage.module.css';
import Badge from './Badge/Badge';

function ComponentPage() {
  return (
    <>
      <div className={styles.container}>
        <Badge status="done" /> {/* 답변완료 뱃지 표시 */}
        <Badge status="waiting" /> {/* 미답변 뱃지 표시 */}
      </div>
    </>
  );
}
export default ComponentPage;
