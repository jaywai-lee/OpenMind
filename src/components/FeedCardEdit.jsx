import { useState } from 'react';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import styles from './FeedCardEdit.module.css';
import Button from './common/Button/Button';
import { Toast } from './common/Toast/Toast';
import { useToast } from '../context/ToastContext';

function FeedCardEdit({ id: questionId, subject, answer, onEditing, setOnEditing, setOnEditDone, onSubmitAnswer}) {
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

  const { toast } = useToast();

  const handleSubmit = async () => {
    if (text.trim().length === 0) return;
    await onSubmitAnswer(questionId, text);
    setOnEditing(false);
    setOnEditDone(true);
    toast(
      answer === null
        ? '답변이 생성되었습니다'
        : '답변이 수정되었습니다'
    );
  };

  return (     
    <div className={styles.answerForm}>
      <img className={styles.profileImage} src={subject.imageSource} alt="" />
      <div className={styles.answerFormBody}>
        <div className={styles.infoGroup}>
          <span className={styles.userName}>{subject.name}</span>
          { shouldShowDate &&
            <span className={styles.date}>{formatRelativeDate(answer.createdAt)}</span>
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
                <Button onClick={handleSubmit} theme="dark" isDisabled={isButtonEnabled}>
                  {answer === null ? '답변 완료' : '수정 완료'}
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

