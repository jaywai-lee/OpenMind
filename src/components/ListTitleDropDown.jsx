import { useState } from 'react';
import styles from './ListTitleDropDown.module.css';
import ArrowDown from '../assets/icons/arrow-down.svg?react';

function ListTitleDropDown({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState('최신순');
  const [isShowOptions, setIsShowOptions] = useState(false);

  const options = [
    { label: '이름순', value: 'name' },
    { label: '최신순', value: 'createdAt' },
  ];

  const handleToggleOptions = () => setIsShowOptions((prev) => !prev);

  const handleSelectOption = (option) => {
    setSelectedOption(option.label);
    setIsShowOptions(false);
    onSelect?.(option.value);
  };

  return (
    <div className={styles.grop}>
      <h1 className={styles.title}>누구에게 질문할까요?</h1>

      <div className={styles.selectBox}>
        <button
          type="button"
          onClick={handleToggleOptions}
          className={`${styles.label} ${isShowOptions ? styles.active : ''}`}
        >
          {selectedOption}
          {/* 회전 애니메이션을 위해 className 추가 */}
          <ArrowDown
            className={`${styles.arrow} ${isShowOptions ? styles.rotated : ''}`}
          />
        </button>

        {isShowOptions && (
          <ul className={styles.optionsList}>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelectOption(option)}
                className={styles.optionItem}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListTitleDropDown;
