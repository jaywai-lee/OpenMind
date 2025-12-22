import { useState } from 'react';
import styles from './DropDown.module.css';

function DropDown() {
  // 1. 선택된 옵션의 상태 관리
  const [selectedOption, setSelectedOption] = useState('최신순');
  // 2. 드롭다운 열림/닫힘 상태 관리
  const [isShowOptions, setIsShowOptions] = useState(false);

  const options = ['이름순', '최신순'];

  // 드롭다운 열고 닫기 토글
  const handleToggleOptions = () => {
    setIsShowOptions((prev) => !prev);
  };

  // 옵션 선택 시 실행될 함수
  const handleSelectOption = (option) => {
    setSelectedOption(option); // 텍스트 변경
    setIsShowOptions(false); // 선택 후 드롭다운 닫기
  };

  return (
    <div className={styles.selectBox}>
      {/* 라벨 클릭 시 토글 */}
      <label onClick={handleToggleOptions} className={styles.label}>
        {selectedOption}
      </label>

      {/* 옵션 목록 */}
      <ul
        style={{ display: isShowOptions ? 'block' : 'none' }}
        className={styles.ul}
      >
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleSelectOption(option)}
            className={styles.item}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
