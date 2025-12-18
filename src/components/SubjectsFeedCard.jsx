import styles from './SubjectsFeedCard.module.css';
import SubjectsFeedCardList from './SubjectsFeedCardList';
import messages from '../assets/icons/messages.svg';

function SubjectsFeedCard({ count, questions }) {
  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContainer}>
        <img className={styles.messageImage} src={messages} alt="" />
        <span className={styles.messageText}>{count}개의 질문이 있습니다</span>
      </div>
      {questions.map((question) => (
        <SubjectsFeedCardList key={question.id} question={question} />
      ))}
    </section>
  );
}

export default SubjectsFeedCard;
