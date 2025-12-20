import { useState } from 'react';
import logoImage from '../assets/icons/logo.svg';
import Button from './common/Button/Button';
import styles from './MainPageContent.module.css';
import { createSubject } from '../api/subjects';

function MainPageContent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);
  const isDisabled = inputValue.length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimedName = inputValue.replace(/\s+/g, '');
    try {
      const responseData = await createSubject(trimedName);
      console.log('성공:', responseData);
      setInputValue('');
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <section>
      <div className={styles.mainContainer}>
        <h1>
          <img src={logoImage} alt="로고이미지" />
        </h1>
        <div className={styles.mainInputContainer}>
          <form className={styles.mainInputForm} onSubmit={handleSubmit}>
            <span className={styles.personIcon}></span>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
              className={styles.inputName}
            />
            <div className={styles.mainQuestionButtonGroup}>
              <Button type="submit" theme="dark" isDisabled={isDisabled}>
                질문 받기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default MainPageContent;
