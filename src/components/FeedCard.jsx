import styles from './FeedCard.module.css';
import FeedCardList from './FeedCardList';
import messages from '../assets/icons/messages.svg';

function FeedCard() {
  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContainer}>
        <img className={styles.messageImage} src={messages} alt="" />
        <span className={styles.messageText}>3개의 질문이 있습니다</span>
      </div>
      <FeedCardList />
    </section>
  );
}

export default FeedCard;