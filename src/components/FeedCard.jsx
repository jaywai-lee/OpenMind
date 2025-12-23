import styles from './FeedCard.module.css';
import FeedCardList from './FeedCardList';
import Messages from '../assets/icons/messages.svg?react';
import FloatingButton from './common/Button/FloatingButton';

function FeedCard({ subject, count, questions, onReact }) {
  return (
    <div className={styles.FeedCardContainer}>
      { questions?.length > 0 && (
        <div className={styles.deleteButton}>
          <FloatingButton theme="dark" size="small">삭제하기</FloatingButton>
        </div>
      )}
      <section className={styles.messageSection}>
        <div className={styles.messageContainer}>
          <Messages width={24} height={24} fill="#542F1A"/>
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
    </div>
  );
}

export default FeedCard;