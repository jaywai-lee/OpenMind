import styles from './SubjectsFeedCardList.module.css';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import Badge from '../../src/components/common/Badge/Badge';
import storage from '../utils/storage';
import ThumbsUp from '../assets/icons/thumbs-up.svg?react';
import ThumbsDown from '../assets/icons/thumbs-down.svg?react';

function SubjectsFeedCardList({ subject, question, onReact }) {
  const { id, content, createdAt, like, dislike, answer } = question;
  const userId = storage.get('userId', null);
  const subjectId = subject?.id;
  if (!userId || !subjectId) {
    console.log('userId또는 subjectId가 없습니다.');
  }
  const storageKey =
    userId && subjectId ? `reactions-${userId}-${subjectId}` : null;
  const reactions = storageKey ? storage.get(storageKey, {}) : {};
  const myReaction = reactions[id];
  const isAnswered = !!answer && !answer.isRejected;
  const isRejected = !!answer && answer.isRejected;

  const handleReactionClick = (type) => {
    if (myReaction || !storageKey) return;
    onReact(id, type);
    const nextReactions = {
      ...reactions,
      [id]: type,
    };
    storage.set(storageKey, nextReactions);
  };

  return (
    <section className={styles.feedCardListContainer}>
      <div className={styles.answerActions}>
        <Badge status={answer ? 'done' : 'waiting'} />
      </div>

      <div className={styles.question}>
        <span className={styles.questionMeta}>
          질문 · {formatRelativeDate(createdAt)}
        </span>
        <span className={styles.questionText}>{content}</span>
      </div>

      {isAnswered && (
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
            <p className={styles.answerText}>{answer.content}</p>
          </div>
        </div>
      )}

      {isRejected && (
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
            <p className={styles.rejectContent}>답변 거절</p>
          </div>
        </div>
      )}

      <div className={styles.reactions}>
        <div className={styles.reactionGroup}>
          <button
            className={`${styles.reactionButton} ${myReaction === 'like' ? styles.active : ''}`}
            type="button"
            disabled={!userId || myReaction}
            onClick={() => handleReactionClick('like')}
          >
            <ThumbsUp className={styles.icon} />
            <span>좋아요 {like}</span>
          </button>
          <button
            className={`${styles.reactionButton} ${myReaction === 'dislike' ? styles.active : ''}`}
            type="button"
            disabled={!userId || myReaction}
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
