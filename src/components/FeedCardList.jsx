import { useState } from 'react';
import styles from './FeedCardList.module.css';
import more from '../assets/icons/more.svg';
import thumbsDown from '../assets/icons/thumbs-down.svg';
import thumbsUp from '../assets/icons/thumbs-up.svg';
import AnswerDropdown from './AnswerDropdown';
import FeedCardListItem from './FeedCardListItem';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import Badge from '../../src/components/common/Badge/Badge';

function FeedCardList({ feed }) {
  const { content, createdAt, like, dislike, answer } = feed;
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);

  const handleMoreClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handeleEditClick = () => {
    setIsEditing(true);
    setIsDropdownOpen(false);
  };

  return (
    <section className={styles.feedCardListContainer}>
      <div className={styles.answerActions}>
        <Badge status={answer ? 'done' : 'waiting'} />
        <div className={styles.dropdownGroup}>
          <img className={styles.moreImage} onClick={handleMoreClick} src={more} alt="" />
          { isDropdownOpen && 
            <AnswerDropdown onClick={handeleEditClick}/> 
          }
        </div>
      </div>
      <div className={styles.question}>
        <span className={styles.questionMeta}>질문 · {formatRelativeDate(createdAt)}</span>
        <span className={styles.questionText}>{content}</span>
      </div>
      {(answer || isEditing || '') && (
        <FeedCardListItem 
          answer={answer}
          createdAt={answer.createdAt} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing} 
        />
      )}
      <div className={styles.reactions}>
        <div className={styles.reactionGroup}> 
          <div className={styles.reactionButton}>
            <img className={styles.reactionImg} src={thumbsUp} alt="" />
            <span>좋아요 {like}</span>
          </div>
          <div className={styles.reactionButton}>
            <img className={styles.reactionImg} src={thumbsDown} alt="" />
            <span>싫어요 {dislike}</span>
          </div>
        </div>
      </div> 
    </section>
  );
}
export default FeedCardList;