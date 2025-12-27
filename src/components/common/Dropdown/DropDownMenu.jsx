import { useState } from 'react';
import styles from './DropDown.module.css';
import ArrowUp from '../../../assets/icons/arrow-up.svg?react';

/**
 * 공통 DropDown 메뉴
 * onChangeSort: (function) 함수 호출 -> 인자로 선택값('latest'/'name' (string)) 보냄
 * @param { onChangeSort }
 * @returns
 */
function DropDown({ onChangeSort }) {
  const [sortType, setSortType] = useState('최신순');
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { label: '최신순', value: 'latest' },
    { label: '이름순', value: 'name' },
  ];
  const toggleShow = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionItemClick = (option) => {
    setSortType(option.label);
    setIsOpen(false);
    if (onChangeSort) onChangeSort(option.value);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.selectButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleShow}
      >
        {sortType}
        <ArrowUp
          width={14}
          height={14}
          className={`${styles.arrowIcon} ${isOpen ? styles.isOpen : ''}`}
        />
      </button>

      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.optionItem}
              onClick={() => handleOptionItemClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default DropDown;
