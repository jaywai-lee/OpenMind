import styles from './SubjectsFeedCard.module.css';
import SubjectsFeedCardList from './SubjectsFeedCardList';
import Messages from '../assets/icons/messages.svg?react';
import blankImage from '../assets/images/blank-image.png';

function SubjectsFeedCard({ subject, count, questions, onReact }) {
  if (questions.length === 0) {
    return (
      <section className={styles.emptySection}>
        <div className={styles.emptyContainer}>
          <div className={styles.messageGroup}>
            <Messages className={styles.messageImage} />
            <span className={styles.messageText}>아직 질문이 없습니다</span>
          </div>
          <img className={styles.blankImage} src={blankImage} alt="empty" />
        </div>
      </section>
    );
  }
  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContainer}>
        <Messages className={styles.messageImage} />
        <span className={styles.messageText}>{count}개의 질문이 있습니다</span>
      </div>
      {questions.map((question) => (
        <SubjectsFeedCardList
          key={question.id}
          question={question}
          subject={subject}
          onReact={onReact}
        />
      ))}
    </section>
  );
}

export default SubjectsFeedCard;
