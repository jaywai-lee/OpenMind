import styles from './SubjectsFeedCardList.module.css';
import thumbsDown from '../assets/icons/thumbs-down.svg';
import thumbsUp from '../assets/icons/thumbs-up.svg';
import profileImage from '../assets/images/userimage-sample.png';
import Badge from '../../src/components/common/Badge/Badge';
import { formatRelativeDate } from '../utils/formatRelativeDate';

function SubjectsFeedCardList({ subject, question }) {
  const { content, createdAt, like, dislike, answer } = question;
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

      {answer && (
        <div className={styles.answerFormBody}>
          <img
            className={styles.profileImage}
            src={subject.imageSource}
            alt={subject.id}
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

      <div className={styles.reactions}>
        <div className={styles.reactionGroup}>
          <button className={styles.reactionButton}>
            <img className={styles.reactionImg} src={thumbsUp} alt="" />
            <span>좋아요 {like}</span>
          </button>
          <button className={styles.reactionButton}>
            <img className={styles.reactionImg} src={thumbsDown} alt="" />
            <span>싫어요 {dislike}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default SubjectsFeedCardList;
