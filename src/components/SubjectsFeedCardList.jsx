import styles from './SubjectsFeedCardList.module.css';
import thumbsDown from '../assets/icons/thumbs-down.svg';
import thumbsUp from '../assets/icons/thumbs-up.svg';
import profileImage from '../assets/images/userimage-sample.png';

function SubjectsFeedCardList({ question }) {
  const { content, createdAt, like, dislike, answer } = question;
  return (
    <section className={styles.feedCardListContainer}>
      <div className={styles.answerActions}>
        <div className={styles.answerStatus}>
          {answer ? '답변완료' : '미답변'}
        </div>
      </div>

      <div className={styles.question}>
        <span className={styles.questionMeta}>
          질문 · {new Date(createdAt).toLocaleDateString()}
        </span>
        <span className={styles.questionText}>{content}</span>
      </div>

      {answer && (
        <div className={styles.answerFormBody}>
          <img className={styles.profileImage} src={profileImage} alt="" />
          <div className={styles.answerTextGroup}>
            <div className={styles.answerMeta}>
              <span className={styles.userName}>{answer.author?.name}</span>
              <span className={styles.answerDate}>
                {new Date(answer.createdAt).toLocaleDateString()}
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
