import { useState } from 'react';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import styles from './FeedCardEdit.module.css';
import Button from './common/Button/Button';

// createdAt : 답변하기 서버와 연동 후에는 answer.createdAt으로 수정하기
// 지금은 그냥 임시로 questions.createdAt으로 사용 중
function FeedCardEdit({ createdAt, subject, answer, onEditing, setOnEditing, setOnEditDone}) {
  const [ text, setText ] = useState(answer?.content || '');
  const isNoAnswer = !answer || !answer?.content;
  const shouldShowInput = isNoAnswer || onEditing;
  const isRejected = !!answer && (answer.isRejected === true || answer.isRejected === 'true');
  const isButtonEnabled = text.trim().length === 0;
  const isProcessDone = !!answer?.content || isRejected;
  const shouldShowDate = isProcessDone && !onEditing;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    setOnEditing(false);
    setOnEditDone(true);
  };

  return (     
    <div className={styles.answerForm}>
      <img className={styles.profileImage} src={subject.imageSource} alt="" />
      <div className={styles.answerFormBody}>
        <div className={styles.infoGroup}>
          <span className={styles.userName}>{subject.name}</span>
          { shouldShowDate &&
            <span className={styles.date}>{formatRelativeDate(createdAt)}</span>
          }
        </div>
        {isRejected ? (
          <span className={styles.rejectContent}>답변 거절</span>
          ) : (
          <>
            {shouldShowInput ? (
              <>
                <textarea 
                  className={styles.answerInput}
                  value={text}
                  onChange={handleTextChange} 
                  placeholder='답변을 입력해주세요' 
                />
                <Button theme="dark" onClick={handleSubmit} isDisabled={isButtonEnabled}>
                  {isNoAnswer ? '답변 완료' : '수정 완료'}
                </Button>
              </>
              ) : (
                <p className={styles.answerText}>{answer?.content}</p>
              )
            }
          </>
        )}
      </div>
    </div>
  );
}

export default FeedCardEdit;

