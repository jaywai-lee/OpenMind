import styles from './Badge.module.css';

const Badge = ({ status }) => {
  // status 값에 따라 클래스를 결정 (done 또는 waiting)
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
