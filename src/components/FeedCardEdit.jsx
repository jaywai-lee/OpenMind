import { useState } from 'react';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import styles from './FeedCardEdit.module.css';
import Button from './common/Button/Button';

function FeedCardEdit({ subject, answer, onEditing, setOnEditing, setOnEditDone, isRejected }) {
  const [ text, setText ] = useState(answer?.content || '');
  const [ showCreatedAt, setShowCreatedAt] = useState(false);

  const isNoAnswer = answer?.content === 'null' || !answer?.content;
  const shouldShowInput = isNoAnswer || onEditing;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    if(answer) answer.content = text; //일단 답변 텍스트 업데이트, api연동 후 수정 
    setShowCreatedAt(true);
    setOnEditing(false);
    setOnEditDone(true);
  };

  const isButtonEnabled = text.trim().length === 0;

  return (
    <>
      {isRejected && (
        <div className={styles.answerForm}>
          <img className={styles.profileImage} src={subject.imageSource} alt="" />
          <div className={styles.answerFormBody}>
            <div className={styles.infoGroup}>
              <span className={styles.userName}>{answer?.name}</span>
              { showCreatedAt && <span className={styles.date}>{formatRelativeDate(createdAt)}</span> }
              <p className={styles.rejectContent}>답변 거절</p>
            </div>
            { shouldShowInput ? (
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
                <p className={styles.answerText}>{content}</p>
              )
            }
          </div>
        </div>
      )}
    </>
  );
}

export default FeedCardEdit;

