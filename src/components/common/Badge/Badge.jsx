import styles from './Badge.module.css';
/**
 * 뱃지 컴포넌트 (값 타입 설명)
 * status: "done" / "waiting" (string) 답변완료 / 미답변
 * @props { status }
 * @returns <span> 뱃지 - 답변완료 : 미답변
 */
const Badge = ({ status }) => {
  const isCompleted = status === 'done';

  return (
    <span
      className={`${styles.badge} ${isCompleted ? styles.done : styles.waiting}`}
    >
      {isCompleted ? '답변완료' : '미답변'}
    </span>
  );
};

export default Badge;
