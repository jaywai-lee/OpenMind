import styles from './Reaction.module.css';
import ThumbsDown from '../../../assets/icons/thumbs-down.svg?react';
import ThumbsUp from '../../../assets/icons/thumbs-up.svg?react';
import { useState } from 'react';
/**
 *  Reaction 컴포넌트 (좋아요/싫어요 기능)
 *  - 사용법 예시
 *  <Reaction
 *   question={question}
 *   isReactionDisabled={isReactionDisabled}
 *   activeMyReactionType={myReaction}
 *   onReact={handleReactionClick}
 *  ></Reaction>
 *
 * question: (object) 질문 정보
 * isReactionDisabled: true/false (Boolean) 비활성화 여부
 * activeMyReactionType: 'like'/'dislike' (string) 사용자가 이미 누른 버튼의 타입
 * onReact: (function) 눌렀을때 전달할 함수 -> 인자로 type('like'/'dislike'(string)) 전달
 * @param { question, isReactionDisabled, activeMyReactionType, onReact}
 * @returns
 */
function Reaction({
  question,
  isReactionDisabled,
  activeMyReactionType,
  onReact,
}) {
  const { like, dislike } = question;
  const [voted, setVoted] = useState(false);

  // console.log(
  //   'activeMyReactionType::',
  //   activeMyReactionType,
  //   typeof activeMyReactionType,
  // );

  const handleReactionClick = (type) => {
    if (isReactionDisabled || voted) return;
    setVoted(true);
    onReact(type);
  };

  const isDisabled = isReactionDisabled || voted;
  const currentActive = activeMyReactionType || voted;

  return (
    <div className={styles.reactionContainer}>
      <button
        className={`${styles.reactionButton} ${currentActive === 'like' ? styles.active : ''}`}
        type="button"
        disabled={isDisabled}
        onClick={() => handleReactionClick('like')}
      >
        <ThumbsUp width={16} height={16} className={styles.reactIcon} />
        <span>좋아요 {like}</span>
      </button>
      <button
        className={`${styles.reactionButton} ${currentActive === 'dislike' ? styles.active : ''}`}
        type="button"
        disabled={isDisabled}
        onClick={() => handleReactionClick('dislike')}
      >
        <ThumbsDown width={16} height={16} className={styles.reactIcon} />
        <span>싫어요 {dislike}</span>
      </button>
    </div>
  );
}

export default Reaction;
