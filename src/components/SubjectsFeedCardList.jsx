import styles from './SubjectsFeedCardList.module.css';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import Badge from '../../src/components/common/Badge/Badge';
import storage from '../utils/storage';
import ThumbsUp from '../assets/icons/thumbs-up.svg?react';
import ThumbsDown from '../assets/icons/thumbs-down.svg?react';
import useReactionStorage from '../hooks/useReactionStorage';

function SubjectsFeedCardList({ subject, question, onReact }) {
  const { id, content, createdAt, like, dislike, answer } = question;
  const userId = storage.get('userId', null);
  const subjectId = subject?.id;
  const { enabled, getMyReaction, setReaction } = useReactionStorage(
    userId,
    subjectId,
  );
  const myReaction = getMyReaction(id);
  const hasAnswer = Boolean(answer);
  const isAnswered = hasAnswer && !answer.isRejected;
  const isRejected = hasAnswer && answer.isRejected;
  const badgeStatus = hasAnswer ? 'done' : 'waiting';
  const isReactionDisabled = !enabled || Boolean(myReaction);

  const handleReactionClick = (type) => {
    if (myReaction || !enabled) return;
    onReact(id, type);
    setReaction(id, type);
  };

  const renderAnswerContent = () => {
    if (isRejected) {
      return <p className={styles.rejectContent}>답변 거절</p>;
    }
    if (isAnswered) {
      return <p className={styles.answerText}>{answer.content}</p>;
    }
    return null;
  };

  return (
    <section className={styles.feedCardListContainer}>
      <div className={styles.answerActions}>
        <Badge status={badgeStatus} />
      </div>

      <div className={styles.question}>
        <span className={styles.questionMeta}>
          질문 · {formatRelativeDate(createdAt)}
        </span>
        <span className={styles.questionText}>{content}</span>
      </div>

      {(isAnswered || isRejected) && (
        <div className={styles.answerFormBody}>
          <img
            className={styles.profileImage}
            src={subject.imageSource}
            alt={subject.name}
          />
          <div className={styles.answerTextGroup}>
            <div className={styles.answerMeta}>
              <span className={styles.userName}>{subject.name}</span>
              <span className={styles.answerDate}>
                {formatRelativeDate(answer.createdAt)}
              </span>
            </div>
            {renderAnswerContent()}
          </div>
        </div>
      )}

      <div className={styles.reactions}>
        <div className={styles.reactionGroup}>
          <button
            className={`${styles.reactionButton} ${myReaction === 'like' ? styles.active : ''}`}
            type="button"
            disabled={isReactionDisabled}
            onClick={() => handleReactionClick('like')}
          >
            <ThumbsUp className={styles.icon} />
            <span>좋아요 {like}</span>
          </button>
          <button
            className={`${styles.reactionButton} ${myReaction === 'dislike' ? styles.active : ''}`}
            type="button"
            disabled={isReactionDisabled}
            onClick={() => handleReactionClick('dislike')}
          >
            <ThumbsDown className={styles.icon} />
            <span>싫어요 {dislike}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default SubjectsFeedCardList;
