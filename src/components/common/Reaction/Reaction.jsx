import styles from './Reaction.module.css';
import ThumbsDown from '../../../assets/icons/thumbs-down.svg?react';
import ThumbsUp from '../../../assets/icons/thumbs-up.svg?react';

function Reaction({ question, onReaction }) {
  // const { like, dislike } = question;

  return (
    <div className={styles.reactionContainer}>
      <button className={styles.reactionGroup}>
        <ThumbsUp width={16} height={16} />
        좋아요
      </button>
      <button className={styles.reactionGroup}>
        <ThumbsDown width={16} height={16} />
        싫어요
      </button>
    </div>
  );
}

export default Reaction;
