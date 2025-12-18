import styles from './FloatingButton.module.css';

function FloatingButton({ onClick }) {
  return (
    <button className={styles.floatingButton} type="button" onClick={onClick}>
      질문 작성하기
    </button>
  );
}

export default FloatingButton;
