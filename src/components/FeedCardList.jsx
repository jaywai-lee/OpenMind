import { useState } from 'react';
import { formatRelativeDate } from '../utils/formatRelativeDate';
import styles from './FeedCardList.module.css';
import More from '../assets/icons/more.svg?react';
import ThumbsUp from '../assets/icons/thumbs-up.svg?react';
import ThumbsDown from '../assets/icons/thumbs-down.svg?react';
import AnswerDropdown from './AnswerDropdown';
import FeedCardEdit from './FeedCardEdit';
import Badge from '../../src/components/common/Badge/Badge';
import storage from '../utils/storage';
import QuestionModal from './common/modal/ConfirmModal';

function FeedCardList({ subject, question, onReact, onSubmitAnswer, onDeleteFeedCard  }) {
  const { id, content, createdAt, like, dislike, answer } = question;
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ isEditDone, setIsEditDone ] = useState(false);
  const subjectId = storage.get('subjectId');
  const storageKey = `reactions-${subjectId}`;
  const reactions = storage.get(storageKey) || '{}';
  const myReaction = reactions[id];
  const shouldShowBadgeStatus = !!answer || answer?.content || isEditDone;
  const isRejected = !!answer && answer.isRejected === true;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const openDeleteModal = (id) => {
    setSelectedQuestionId(id);
    setModalType('delete');
    setIsModalOpen(true);
  };

  const openRejectModal = (id) => {
    setSelectedQuestionId(id);
    setModalType('reject');
    setIsModalOpen(true);
  };

  const handleConfirmModal = () => {
    if (modalType === 'delete') {
      onDeleteFeedCard(selectedQuestionId);
    }
    if (modalType === 'reject') {
      onSubmitAnswer(
      selectedQuestionId,
      '답변을 거절했습니다.',
      true
      );
    }
    setIsModalOpen(false);
  };

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
            <AnswerDropdown 
              onClick={handleEditClick} 
              id={id} 
              onSubmitAnswer={onSubmitAnswer} 
              answer={answer} 
              onDeleteFeedCard ={onDeleteFeedCard}
              onOpenDeleteModal={openDeleteModal}
              onOpenRejectModal={openRejectModal}
            /> 
            }
          </div>
        )}
      </div>
      <div className={styles.question}>
        <span className={styles.questionMeta}>질문 · {formatRelativeDate(createdAt)}</span>
        <span className={styles.questionText}>{content}</span>
      </div>
      <FeedCardEdit
        id={id}
        answer={answer}
        createdAt={createdAt}
        subject={subject}
        onEditing={isEditing} 
        setOnEditing={setIsEditing} 
        setOnEditDone={setIsEditDone}
        onSubmitAnswer={onSubmitAnswer}
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
      <QuestionModal
        isOpen={isModalOpen}
        message={
          modalType === 'delete'
            ? '질문 및 답변을 삭제하시겠습니까?'
            : '답변을 거절하시겠습니까?'
        }
        subMessage={
          modalType === 'delete'
            ? '삭제된 질문과 답변은 복구 불가능합니다.'
            : '한번 거절한 답변은 다시 답변할 수 없습니다.'
        }
        onConfirm={handleConfirmModal}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
export default FeedCardList;