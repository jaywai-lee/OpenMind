import styles from './FeedCardList.module.css';
import profileImage from '../assets/images/userimage-sample.png';
import { useState } from 'react';
import { formatRelativeDate } from '../utils/formatRelativeDate';

function FeedCardListItem({ answer, createdAt, isEditing, setIsEditing }) {
  const [ text, setText ] = useState(answer.content);
  const [ showCreatedAt, setShowCreatedAt] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    answer.content = text;
    setIsEditing(false);
    setShowCreatedAt(true);
  };

  const isButtonEnabled = text.trim().length > 0;

  return (
    <div className={styles.answerForm}>
      <img className={styles.profileImage} src={profileImage} alt="" />
      <div className={styles.answerFormBody}>
        <span className={styles.userName}>{answer.name}</span>
        { showCreatedAt && <span>{formatRelativeDate(answer.createdAt)}</span> }
        { isEditing ? (
            <>
              <textarea 
              className={styles.answerInput}
              value={text}
              onChange={handleTextChange} 
              placeholder='답변을 입력해주세요' />
              <button 
                className={`${styles.submitButton} ${isButtonEnabled ? styles.disabled : ''}`}
                onClick={handleSubmit}
              >
                수정 완료
              </button>
            </>
          ) : (
            <p className={styles.answerText}>{answer.content}</p>
          )
        }
      </div>
    </div>
  );
}

export default FeedCardListItem;

