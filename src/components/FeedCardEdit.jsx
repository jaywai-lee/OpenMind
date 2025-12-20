import { useState } from 'react';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import styles from './FeedCardEdit.module.css';
import profileImage from '../assets/images/userimage-sample.png';
import Button from './common/Button/Button';

function FeedCardEdit({ answer, onEditing, setOnEditing }) {
  const [ text, setText ] = useState(answer.content);
  const [ showCreatedAt, setShowCreatedAt] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    answer.content = text; //일단 답변 텍스트 업데이트
    setOnEditing(false);
    setShowCreatedAt(true);
  };

  const isButtonEnabled = text.trim().length === 0;

  return (
    <div className={styles.answerForm}>
      <img className={styles.profileImage} src={profileImage} alt="" />
      <div className={styles.answerFormBody}>
        <div className={styles.infoGroup}>
          <span className={styles.userName}>{answer.name}</span>
          { showCreatedAt && <span className={styles.date}>{formatRelativeDate(answer.createdAt)}</span> }
        </div>
        { onEditing ? (
            <>
              <textarea 
                className={styles.answerInput}
                value={text}
                onChange={handleTextChange} 
                placeholder='답변을 입력해주세요' 
              />
              <Button 
                theme="dark"
                onClick={handleSubmit}
                isDisabled={isButtonEnabled}
                >
                수정 완료
              </Button>
            </>
          ) : (
            <p className={styles.answerText}>{answer.content}</p>
          )
        }
      </div>
    </div>
  );
}

export default FeedCardEdit;

