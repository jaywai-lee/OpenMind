import styles from './Button.module.css';
/**
 * 버튼 컴포넌트 (값 타입 설명)
 * style: width 100% 이므로 이 컴포넌트를 감싸고 있는 부모에서 width 값 제어해야 함
 * children: 태그안의 내용, type: "dark" / "white" (string), onClick: (function) 클릭이벤트, isDisabled: (Boolean) 비활성처리
 * @props { children, type, onClick, isDisabled }
 * @returns <button> 버튼
 */
function Button({ children, type, onClick, isDisabled, ...props }) {
  return (
    <>
      <button
        className={`${styles.Button} ${styles[type]}`}
        onClick={onClick}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
