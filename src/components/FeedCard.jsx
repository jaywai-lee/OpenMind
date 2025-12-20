import styles from './FeedCard.module.css';
import FeedCardList from './FeedCardList';
import messages from '../assets/icons/messages.svg';

function FeedCard({ feeds }) {
  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContainer}>
        <img className={styles.messageImage} src={messages} alt="" />
        <span className={styles.messageText}>{feeds.length}개의 질문이 있습니다</span>
      </div>
      {feeds.map((feed) => (
          <FeedCardList key={feed.id} feed={feed} />
        ))
      }
    </section>
  );
}

export default FeedCard;