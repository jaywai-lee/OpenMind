import styles from './FeedCard.module.css';
import FeedCardList from './FeedCardList';
import Messages from '../assets/icons/messages.svg?react';
import FloatingButton from './common/Button/FloatingButton';
import QuestionModal from './common/modal/ConfirmModal';
import { useState } from 'react';

function FeedCard({ subject, count, questions, onReact, onSubmitAnswer, onDeleteFeedCard , onDeleteAll }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDeleteAll = () => {
    onDeleteAll();
    setIsDeleteModalOpen(false);
  };

  return (
    <div className={styles.FeedCardContainer}>
      {questions?.length > 0 && (
        <div className={styles.deleteButton} onClick={openDeleteModal}>
          <FloatingButton theme="dark" size="small">
            삭제하기
          </FloatingButton>
        </div>
      )}
      <section className={styles.messageSection}>
        <div className={styles.messageContainer}>
          <Messages width={24} height={24} fill="#542F1A" />
          <span className={styles.messageText}>
            {count}개의 질문이 있습니다
          </span>
        </div>
        {questions.map((question) => (
          <FeedCardList
            key={question.id}
            question={question}
            subject={subject}
            onReact={onReact}
            onSubmitAnswer={onSubmitAnswer}
            onDeleteFeedCard ={onDeleteFeedCard}
          />
        ))}
      </section>
      <QuestionModal
        isOpen={isDeleteModalOpen}
        message="전체 질문을 삭제하시겠습니까?"
        subMessage="모든 질문과 답변이 삭제될 시 복구는 불가능합니다."
        onConfirm={handleConfirmDeleteAll}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
}

export default FeedCard;
