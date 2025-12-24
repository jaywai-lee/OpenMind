import { useState, useEffect, useRef } from 'react';
import styles from './MoreDropDown.module.css';
import Edit from '../../../assets/icons/edit.svg?react';
import Close from '../../../assets/icons/close.svg?react';
import Rejection from '../../../assets/icons/rejection.svg?react';

/**
 * 공통 - 드롭다운 (더보기 토글)
 * 사용법
 *  <MeatballMenu
 *    onEdit={ }
 *    onDelete={ }
 *    onReject={ }
 *  >
 *    <div className={}>...</div>  <-- 클릭되는 요소를 div 태그로 감싸고 스타일 제어하기
 *  </MeatballMenu>
 *
 * children: 자식요소를 가져옴
 * onEdit: 수정하기 클릭시 함수 호출 (function)
 * onDelete: 삭제하기 클릭시 함수 호출 (function)
 * onReject: 거절하기 클릭시 함수 호출 (function)
 * @props { children, onEdit, onDelete, onReject }
 * @returns
 */
function MeatballMenu({ children, onEdit, onDelete, onReject }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleAction = (callback) => {
    if (callback) callback();
    setIsOpen(false);
  };

  return (
    <div className={styles.MoreDropDownContainer} ref={menuRef}>
      <div className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>

      {isOpen && (
        <ul className={styles.MoreDropdownGroup}>
          <li className={styles.menuItem} onClick={() => handleAction(onEdit)}>
            <Edit width={14} height={14} className={styles.edit} />
            수정하기
          </li>
          <li
            className={styles.menuItem}
            onClick={() => handleAction(onDelete)}
          >
            <Close width={14} height={14} className={styles.delete} />
            삭제하기
          </li>
          <li
            className={styles.menuItem}
            onClick={() => handleAction(onReject)}
          >
            <Rejection width={14} height={14} className={styles.reject} />
            거절하기
          </li>
        </ul>
      )}
    </div>
  );
}

export default MeatballMenu;
