import { useState } from 'react';
import styles from './FeedCardList.module.css';
import more from '../assets/icons/more.svg';
import AnswerDropdown from './AnswerDropdown';
import FeedCardEdit from './FeedCardEdit';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import Badge from '../../src/components/common/Badge/Badge';

function FeedCardList({ subject, question, onReact }) {
  const { id, content, createdAt, like, dislike, answer } = question;
  const subjectId = localStorage.getItem('subjectId');
  const storageKey = `reactions-${subjectId}`;
  const reactions = JSON.parse(localStorage.getItem(storageKey) || '{}');
  const myReaction = reactions[id];
  const isAnswered = !!answer && !answer.isRejected;
  const isRejected = !!answer && answer.isRejected;

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ isEditDone, setIsEditDone ] = useState(false);

  const shouldShowEdit = answer || !content || isEditing;
  // const shouldShowBadgeStatus = answer?.content || isEditDone;

  const handleReactionClick = (type) => {
    if (myReaction) return;
    onReact(id, type);
    reactions[id] = type;
    localStorage.setItem(storageKey, JSON.stringify(reactions));
  };

  const handleMoreClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsDropdownOpen(false);
  };

  return (
    <section className={styles.feedCardListContainer}>
      <div className={styles.answerActions}>
        <Badge status={ answer ? 'done' : 'waiting'} />
        <div className={styles.dropdownGroup}>
          <img className={styles.moreImage} onClick={handleMoreClick} src={more} alt="" />
          { isDropdownOpen && 
            <AnswerDropdown onClick={handleEditClick}/> 
          }
        </div>
      </div>
      <div className={styles.question}>
        <span className={styles.questionMeta}>질문 · {formatRelativeDate(createdAt)}</span>
        <span className={styles.questionText}>{content}</span>
      </div>
      { isAnswered && (
        <FeedCardEdit
          subject={subject}
          isRejected={isRejected} 
          answer={answer} 
          onEditing={isEditing} 
          setOnEditing={setIsEditing} 
          setOnEditDone={setIsEditDone}
        />
      )}
      <div className={styles.reactions}>
        <div className={styles.reactionGroup}>
          <button
            className={`${styles.reactionButton} ${myReaction === 'like' ? styles.active : ''}`}
            type="button"
            onClick={() => handleReactionClick('like')}
          >
            <span className={`${styles.reactionIcon} ${styles.likeIcon}`} />
            <span>좋아요 {like}</span>
          </button>
          <button
            className={`${styles.reactionButton} ${myReaction === 'dislike' ? styles.active : ''}`}
            type="button"
            onClick={() => handleReactionClick('dislike')}
          >
            <span className={`${styles.reactionIcon} ${styles.dislikeIcon}`} />
            <span>싫어요 {dislike}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default FeedCardList;