import styles from './FloatingButton.module.css';
/**
 * floating 버튼 컴포넌트 (값 타입 설명)
 * style: width 100% 이므로 이 컴포넌트를 감싸고 있는 부모에서 width, height값 제어해야 함
 * children: 태그안의 내용, size: small (string) 작은사이즈일때만 small 없으면 기본사이즈, onClick: (function) 클릭이벤트,
 * @props { children, size, onClick }
 * @returns <button> 버튼
 */
function FloatingButton({ children, size, onClick, ...props }) {
  return (
    <button
      className={`${styles.floatingButton} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default FloatingButton;
