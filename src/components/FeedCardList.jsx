import { useState } from 'react';
import styles from './FeedCardList.module.css';
import More from '../assets/icons/more.svg?react';
import ThumbsUp from '../assets/icons/thumbs-up.svg?react';
import ThumbsDown from '../assets/icons/thumbs-down.svg?react';
import AnswerDropdown from './AnswerDropdown';
import FeedCardEdit from './FeedCardEdit';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import Badge from '../../src/components/common/Badge/Badge';

function FeedCardList({ subject, question, onReact }) {
  const { id, content, createdAt, like, dislike, answer } = question;
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ isEditDone, setIsEditDone ] = useState(false);
  const subjectId = localStorage.getItem('subjectId');
  const storageKey = `reactions-${subjectId}`;
  const reactions = JSON.parse(localStorage.getItem(storageKey) || '{}');
  const myReaction = reactions[id];
  const shouldShowBadgeStatus = !!answer || answer?.content || isEditDone;
  const isRejected = !!answer && answer.isRejected === true;

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
        <Badge status={ shouldShowBadgeStatus ? 'done' : 'waiting'} />
        { !isRejected && (
          <div className={styles.dropdownGroup}>
            <More className={styles.moreImage} onClick={handleMoreClick}/>
            { isDropdownOpen && 
              <AnswerDropdown onClick={handleEditClick} answer={answer}/> 
            }
          </div>
        )}
      </div>
      <div className={styles.question}>
        <span className={styles.questionMeta}>질문 · {formatRelativeDate(createdAt)}</span>
        <span className={styles.questionText}>{content}</span>
      </div>
      <FeedCardEdit
        answer={answer}
        createdAt={createdAt}
        subject={subject}
        onEditing={isEditing} 
        setOnEditing={setIsEditing} 
        setOnEditDone={setIsEditDone}
      />
      <div className={styles.reactions}>
        <div className={styles.reactionGroup}>
          <button
            className={`${styles.reactionButton} ${myReaction === 'like' ? styles.active : ''}`}
            type="button"
            onClick={() => handleReactionClick('like')}
          >
            <ThumbsUp className={styles.reactionIcon}/>
            <span>좋아요 {like}</span>
          </button>
          <button
            className={`${styles.reactionButton} ${myReaction === 'dislike' ? styles.active : ''}`}
            type="button"
            onClick={() => handleReactionClick('dislike')}
          >
            <ThumbsDown className={styles.reactionIcon} />
            <span>싫어요 {dislike}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default FeedCardList;