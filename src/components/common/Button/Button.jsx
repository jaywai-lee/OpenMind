import styles from './Button.module.css';
import ArrowRightLine from '../../../assets/icons/arrow-right-line.svg?react';
import ArrowRightLineDisabled from '../../../assets/icons/arrow-right-line-disabled.svg?react';
/**
 * 버튼 컴포넌트 (값 타입 설명)
 * style: width 100% 이므로 이 컴포넌트를 감싸고 있는 부모에서 width 값 제어해야 함
 * children: 태그안의 내용,
 * theme: "dark" / "white" (string),
 * onClick: (function) 클릭이벤트,
 * isDisabled: (Boolean) 비활성처리
 * hasArrow: (Boolean) 기본값 true  - 'white' theme 에만 적용
 * @props { children, theme, onClick, isDisabled }
 * @returns <button> 버튼
 */
function Button({
  children,
  theme,
  onClick,
  isDisabled,
  hasArrow = true,
  ...props
}) {
  const showArrow = theme === 'white';
  return (
    <button
      className={`${styles.Button} ${styles[theme]} ${!hasArrow ? styles.noArrow : ''}`}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {children}
      {hasArrow && showArrow && (
        <span className={styles.iconGroup}>
          {isDisabled ? (
            <ArrowRightLineDisabled width={18} height={18} fill="#c7bbb5" />
          ) : (
            <ArrowRightLine width={18} height={18} fill="#542f1a" />
          )}
        </span>
      )}
    </button>
  );
}

export default Button;
