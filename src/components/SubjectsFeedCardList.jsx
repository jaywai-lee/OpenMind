import styles from './SubjectsFeedCardList.module.css';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import Badge from '../../src/components/common/Badge/Badge';

function SubjectsFeedCardList({ subject, question, onReact }) {
  const { id, content, createdAt, like, dislike, answer } = question;
  const subjectId = localStorage.getItem('subjectId');
  const storageKey = `reactions-${subjectId}`;
  const reactions = JSON.parse(localStorage.getItem(storageKey) || '{}');
  const myReaction = reactions[id];
  const isAnswered = !!answer && !answer.isRejected;
  const isRejected = !!answer && answer.isRejected;

  const handleReactionClick = (type) => {
    if (myReaction) return;
    onReact(id, type);
    reactions[id] = type;
    localStorage.setItem(storageKey, JSON.stringify(reactions));
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
            <p className={styles.answerContent}>{answer.content}</p>
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
            onClick={() => handleReactionClick('like')}
          >
            <span className={`${styles.reactionIcon} ${styles.likeIcon}`} />
            <span>좋아요 {like}</span>
          </button>
          <button
            className={`${styles.reactionButton} ${myReaction === 'dislike' ? styles.active : ''}`}
            type="button"
            onClick={() => handleReactionClick('dislike')}
          >
            <span className={`${styles.reactionIcon} ${styles.dislikeIcon}`} />
            <span>싫어요 {dislike}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default SubjectsFeedCardList;
