import styles from './SubjectsFeedCard.module.css';
import SubjectsFeedCardList from './SubjectsFeedCardList';
import messages from '../assets/icons/messages.svg';

function SubjectsFeedCard() {
  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContainer}>
        <img className={styles.messageImage} src={messages} alt="" />
        <span className={styles.messageText}>3개의 질문이 있습니다</span>
      </div>
      <SubjectsFeedCardList />
    </section>
  );
}

export default SubjectsFeedCard;
