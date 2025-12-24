import { useState, useEffect, useRef } from 'react';
import styles from './MoreDropDown.module.css';

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
    <div className={styles.container} ref={menuRef}>
      <div className={styles.triggerWrapper} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>

      {isOpen && (
        <ul className={styles.dropdown}>
          <li className={styles.menuItem} onClick={() => handleAction(onEdit)}>
            수정하기
          </li>
          <li
            className={styles.menuItem}
            onClick={() => handleAction(onDelete)}
          >
            삭제하기
          </li>
          <li
            className={styles.menuItem}
            onClick={() => handleAction(onReject)}
          >
            거절하기
          </li>
        </ul>
      )}
    </div>
  );
}

export default MeatballMenu;
