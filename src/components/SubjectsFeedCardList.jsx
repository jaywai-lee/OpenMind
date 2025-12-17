import styles from './SubjectsFeedCardList.module.css';
import more from '../assets/icons/more.svg';
import thumbsDown from '../assets/icons/thumbs-down.svg';
import thumbsUp from '../assets/icons/thumbs-up.svg';
import profileImage from '../assets/images/userimage-sample.png';

function SubjectsFeedCardList() {
  return (
    <section className={styles.feedCardListContainer}>
      <div className={styles.answerActions}>
        <div className={styles.answerStatus}>미답변</div>
        <img src={more} alt="" />
      </div>
      <div className={styles.question}>
        <span className={styles.questionMeta}>질문 · 2주전</span>
        <span className={styles.questionText}>좋아하는 동물은?</span>
      </div>
      <div className={styles.answerForm}>
        <img className={styles.profileImage} src={profileImage} alt="" />
        <div className={styles.answerFormBody}>
          <span className={styles.userName}>홍길동</span>
          <textarea
            className={styles.answerInput}
            type="text"
            placeholder="답변을 입력해주세요"
          />
          <button className={styles.submitButton}>답변 완료</button>
        </div>
      </div>
      <div className={styles.reactions}>
        <div className={styles.reactionGroup}>
          <div className={styles.reactionButton}>
            <img src={thumbsUp} alt="" />
            <span>좋아요</span>
          </div>
          <div className={styles.reactionButton}>
            <img src={thumbsDown} alt="" />
            <span>싫어요</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SubjectsFeedCardList;
