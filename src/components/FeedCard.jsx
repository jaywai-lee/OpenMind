import styles from './FeedCard.module.css';
import FeedCardList from './FeedCardList';
import messages from '../assets/icons/messages.svg';

function FeedCard({ subject, count, questions, onReact }) {
  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContainer}>
        <img className={styles.messageImage} src={messages} alt="" />
        <span className={styles.messageText}>{count}개의 질문이 있습니다</span>
      </div>
      {questions.map((question) => (
        <FeedCardList
          key={question.id}
          question={question}
          subject={subject}
          onReact={onReact}
        />
      ))}
    </section>
  );
}

export default FeedCard;