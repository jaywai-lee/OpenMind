import { useState } from 'react';
import styles from './DropDown.module.css';
import ArrowDown from '../assets/icons/arrow-down.svg?react';

function DropDown({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState('최신순');
  const [isShowOptions, setIsShowOptions] = useState(false);

  const options = [
    { label: '이름순', value: 'name' },
    { label: '최신순', value: 'createdAt' },
  ];

  const handleToggleOptions = () => {
    setIsShowOptions((prev) => !prev);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option.label);
    setIsShowOptions(false);
    onSelect?.(option.value);
  };

  return (
    <div className={styles.selectBox}>
      <button
        type="button"
        onClick={handleToggleOptions}
        className={styles.label}
        aria-haspopup="listbox"
        aria-expanded={isShowOptions}
      >
        {selectedOption}
        <ArrowDown width={14} height={14} className={styles.downImage} />
      </button>
      <ul
        className={`${styles.ul} ${isShowOptions ? styles.open : ''}`}
        role="listbox"
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelectOption(option)}
            className={styles.item}
            role="option"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
